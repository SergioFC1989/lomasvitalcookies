import clsx from "clsx";

import { Navbar } from "@/lib/components/navbar/Navbar";
import { Provider } from "@/lib/components/provider/Provider";
import { fontSans } from "@/lib/configs/fonts";

import "@/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen text-foreground bg-background font-sans antialiased", fontSans.variable)}>
        <Provider themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
