import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Feed",
  description: "A Photo Feed App build with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
