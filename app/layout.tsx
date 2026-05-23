import type { Metadata } from "next";
import { Sofadi_One } from "next/font/google";
import NeuralBackground from "@/app/ui/neuralBackground"
import NavBar from "@/app/ui/header"
import Footer from "./ui/footer";
import "./globals.css";

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
      <body className={`${inter.className}`}>
        <NeuralBackground>
          <header>
            <NavBar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </NeuralBackground>
      </body>
    </html>
  );
}
