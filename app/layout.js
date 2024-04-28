import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ThemeProviderContainer from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sociosquares",
  description: "Sociosquares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProviderContainer>
        <body className={inter.className}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </body>
      </ThemeProviderContainer>
    </html>

  );
}
