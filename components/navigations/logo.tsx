import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground h-5 w-auto", className)}
    >
      <text
        x="5"
        y="13"
        fontSize="16"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        MOREAC
      </text>
    </svg>
  );
};
