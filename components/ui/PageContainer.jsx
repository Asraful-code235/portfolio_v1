import { cn } from "@/lib/utils";

export default function PageContainer({ children, className }) {
  return (
    <div className={cn("max-w-[1440px] min-h-screen p-4 mx-auto", className)}>
      {children}
    </div>
  );
}
