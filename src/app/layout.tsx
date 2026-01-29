import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/common/StickyCallButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wallnetix - SME Marketing",
  description: "Automate Your Busy Work. Grow Your Saudi Business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
