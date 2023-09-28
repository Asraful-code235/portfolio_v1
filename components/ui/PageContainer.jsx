import { cn } from "@/lib/utils";

export default function PageContainer({ children, className }) {
  return (
    <div
      className={cn(
        "max-w-[1440px] min-h-screen px-[14px] py-6 md:px-4 md:py-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
