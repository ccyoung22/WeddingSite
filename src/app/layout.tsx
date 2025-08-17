import type { Metadata } from "next";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./globals.css";
import { BrownSectionProvider } from "./contexts/BrownSectionContext";
import Loading from "./components/Loading/Loading";

export const metadata: Metadata = {
  title: "Caitlin & Jake's wedding",
  description: "Created by CY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BrownSectionProvider>
          <Loading />
          <BurgerMenu />

          {children}
        </BrownSectionProvider>
      </body>
    </html>
  );
}
