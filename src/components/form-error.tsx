import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div
      dir="rtl"
      className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive"
    >
      <AlertTriangle className="w-4 h-4"></AlertTriangle>
      <p>{message}</p>
    </div>
  );
};
