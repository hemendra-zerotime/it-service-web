"use client";
import { useEffect, useState } from "react";
import { Enquiry } from "./column";
import { db } from "@/lib/firebase";
import EnquiryTable from "./data-table";
import { Button } from "@/components/ui/button";
import {collection,getDocs} from "firebase/firestore"
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";
async function fetchEnquiryData(){
  const querySnapshotb= await getDocs(collection(db,"enquiry"))
}
export default function EnquiriesPage() {
  const [data, setData] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEnquiryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "enquiry"));
        const enquiries: Enquiry[] = querySnapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            firstName: d.firstName || "NA",
            lastName: d.lastName || "NA",
            mobile: d.phone || "NA",
            email: d.email || "NA",
           date: d.createdAt?.toDate
      ? formatDate(d.createdAt.toDate())
      : "NA", 
            message: d.message || "NA",
          };
        });
        setData(enquiries);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiryData();
  }, []);


  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Enquiry Submissions
        </h1>
        <Button
          onClick={() => {
            const csv = data.map((e) =>
              [
                e.firstName,
                e.lastName,
                e.mobile,
                e.email,
                e.date,
                `"${e.message}"`,
              ].join(",")
            );
            const blob = new Blob(
              [
                ["First Name,Last Name,Mobile,Email,Date,Message", ...csv].join(
                  "\n"
                ),
              ],
              {
                type: "text/csv;charset=utf-8;",
              }
            );
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "enquiries.csv";
            link.click();
          }}
          className="bg-bpc text-white px-4 py-2 rounded-md shadow hover:bg-red-300 transition"
        >
          Export CSV
        </Button>
      </div>

      {loading ? (
             <div className="space-y-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md" />
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md" />
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md" />
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md hidden lg:block" />
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md hidden lg:block" />
        <Skeleton className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md hidden lg:block" />
      </div>
    ))}
  </div>
      ) : (
        <EnquiryTable data={data} />
      )}
    </div>
  );
}
