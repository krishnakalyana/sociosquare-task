import { Inter } from "next/font/google";
import "./globals.css";
import ImageBackground from "./_components/BackgroundImage";
import StoreProvider from "./StoreProvider";

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
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
