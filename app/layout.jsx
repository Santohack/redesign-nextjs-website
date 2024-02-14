import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expert Asbestos Disposal in Vancouver - Safe, Efficient, and Compliant",
  description: "Expert Asbestos Disposal in Vancouver - Safe, Efficient, and Compliant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <Navbar />
        </main>
        {children}
        <Footer />
        </body>
    </html>
  );
}
