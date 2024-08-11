import type { Metadata } from "next";
import { Sofadi_One } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/header"
import Footer from "./ui/footer";

const inter = Sofadi_One({ subsets: ['latin'], weight: "400", style: "normal" });

export const metadata: Metadata = {
  title: "Alejandro Martínez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <NavBar/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
