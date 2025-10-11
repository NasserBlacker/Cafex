import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 h-9 bg-transparent px-3 py-1 text-base transition-[color,box-shadow]",
        "border border-brown-900/40 rounded-xs",
        "focus-within:outline-brown-900 focus-visible:outline-brown-900",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
