"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export type Enquiry = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  date: string;
  message: string;
};

export const columns: ColumnDef<Enquiry>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="p-0 text-left"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "mobile", header: "Mobile" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="p-0 text-left"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      const [expanded, setExpanded] = useState(false);
      const message: string = row.getValue("message");

      return (
        <div className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-left w-full text-gray-700 dark:text-gray-300 focus:outline-none group"
            title="Click to expand/collapse"
          >
            <span className="block w-full truncate">
              {expanded
                ? message
                : `${message.slice(0, 40)}${message.length > 40 ? "..." : ""}`}
            </span>
            {message.length > 40 && (
              <span className="ml-2">
                {expanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </span>
            )}
          </button>
        </div>
      );
    },
  },
];
