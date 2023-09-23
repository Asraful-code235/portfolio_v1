import { cn } from "@/lib/utils";

const variants = {
  unstyled: "p-0 rounded-0 text-base",
  primary: "bg-black text-white",
  secondary: "bg-gray-200",
  warning: "bg-yellow-300 border border-black",
  light: "border border-black",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-sm md:text-base",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
