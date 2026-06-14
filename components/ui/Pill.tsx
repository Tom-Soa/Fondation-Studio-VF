import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  dark = false,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider",
        dark
          ? "border-white/15 bg-white/5 text-white/80"
          : "border-grid-line bg-white text-steel",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-terra" />}
      {children}
    </span>
  );
}
