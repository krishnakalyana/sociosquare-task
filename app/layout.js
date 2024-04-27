import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ImageBackground from "./(public)/_components/BackgroundImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sociosquares",
  description: "Sociosquares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageBackground src={"/assets/wave.svg"} alt="background" />
        {children}</body>
    </html>
  );
}
