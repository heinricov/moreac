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
      <path
        d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
        fill={uniColor ? "currentColor" : "url(#logo-gradient)"}
      />
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

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <path
        d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
        fill={uniColor ? "currentColor" : "url(#logo-gradient)"}
      />
      <text
        x="9"
        y="13"
        fontSize="10"
        fontWeight="700"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        M
      </text>
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="10"
          y1="0"
          x2="10"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B99FE" />
          <stop offset="1" stopColor="#2BC8B7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-7 w-7", className)}
      viewBox="0 0 71 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
        fill="none"
        strokeWidth={0.5}
        stroke="currentColor"
      />
      <text
        x="25"
        y="13"
        fontSize="12"
        fontWeight="600"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        moreac
      </text>
    </svg>
  );
};
