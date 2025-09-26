import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavHeader } from "../navigations/navbar";
import NavFooter from "../navigations/footer";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavHeader />
          {children}
          <NavFooter />
        </ThemeProvider>
      </body>
    </>
  );
}
