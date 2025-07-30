import type { Metadata } from "next";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./globals.css";
import { BrownSectionProvider } from "./contexts/BrownSectionContext";

export const metadata: Metadata = {
  title: "Caitlin & Jake's wedding",
  description: "Created by C.Y :)",
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
          <BurgerMenu />

          {children}
        </BrownSectionProvider>
      </body>
    </html>
  );
}
