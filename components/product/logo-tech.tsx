import React from "react";
import { cn } from "@/lib/utils";

export const Vercel = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/idDpCfN4VD/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1726463494344"
        alt="Vercel"
        className={cn("size-5 dark:invert", className)}
      />
    </>
  );
};

export const Github = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980739"
        alt="Github"
        className={cn("size-5 dark:invert", className)}
      />
    </>
  );
};

export const NextJS = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1bxid64Mup7aczewSAYMX&t=1714556221292"
        alt="NextJS"
        className={cn("size-5 dark:invert", className)}
      />
    </>
  );
};

export const TailwindCSS = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
        alt="Tailwind CSS"
        className={cn("size-5 ", className)}
      />
    </>
  );
};

export const VsCode = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/idIkI_7uw6/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1756787305385"
        alt="VsCode"
        className={cn("size-5 dark:invert", className)}
      />
    </>
  );
};

export const NodeJs = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="https://cdn.brandfetch.io/id7JRtQEAa/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756481464114"
        alt="NodeJs"
        className={cn("size-5 dark:invert", className)}
      />
    </>
  );
};
