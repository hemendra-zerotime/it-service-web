// utils/toasts.tsx
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";
import { ToastContent } from "@/components/ui/ToastContent";

export function showSuccessToast(title: string, message: string) {
  toast(
    <ToastContent
      icon={<CheckCircle className="text-black" />}
      title={title}
      message={message}
      titleClass="text-black"
      messageClass="text-black"
    />,
    {
      className:
        "bg-white text-black border border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-xl",
      duration: 10000,
    }
  );
}

export function showErrorToast(title: string, message: string) {
  toast(
    <ToastContent
      icon={<XCircle className="text-[#FF0055]" />}
      title={title}
      message={message}
      titleClass="text-[#FF0055]"
      messageClass="text-[#FF0055]"
    />,
    {
      className:
        "bg-[#ffe6ee] text-black border border-[#FF0055] shadow-[0_0_10px_rgba(255,0,85,0.15)] rounded-xl",
      duration: 10000,
    }
  );
}
