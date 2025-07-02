"use client";
import { useEffect, useState } from "react";
import { Enquiry } from "./column";
import EnquiryTable from "./data-table";
import { Button } from "@/components/ui/button";
export default function EnquiriesPage() {
  const [data, setData] = useState<Enquiry[]>([]);
  useEffect(() => {
    const dummyData = Array.from({ length: 1000 }, (_, i) => ({
      firstName: `User${i + 1}`,
      lastName: `Last${i + 1}`,
      mobile: `98765${(10000 + i).toString().slice(-5)}`,
      email: `user${i + 1}@example.com`,
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
        .toISOString()
        .split("T")[0], // random date
      message: `This is a test message dfndjskjf  fd gnfdj fngkfdg jkfd grg jrdnmgdkgjkrdngdni  ruhgjre lgji regjreih grekg reigre ngiregkr egr re greg lkrekgre klgjrei gregrenkgrg re k from User${
        i + 1
      }`,
    }));

    setData(dummyData);
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

      <EnquiryTable data={data} />
    </div>
  );
}
