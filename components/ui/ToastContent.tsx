import { X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils"; // If you use Tailwind class merging utility

export function ToastContent({
  icon,
  title,
  message,
  titleClass,
  messageClass,
}: {
  icon?: React.ReactNode;
  title: string;
  message: string;
  titleClass?: string;
  messageClass?: string;
}) {
  return (
    <div className="relative flex items-start gap-2 p-1 sm:p-1.5">
      {/* Icon */}
      {icon && <div className="mt-0.5 shrink-0">{icon}</div>}

      {/* Content */}
      <div className="flex-1">
        <h3 className={cn("font-semibold text-sm sm:text-base", titleClass)}>
          {title}
        </h3>
        <p className={cn("text-xs sm:text-sm", messageClass)}>{message}</p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => toast.dismiss()}
        className="absolute top-0 right-0  rounded-full hover:bg-black/10"
        aria-label="Close"
      >
        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
      </button>
    </div>
  );
}
