import "./globals.css";
import { Inter } from "next/font/google";
import ClientProviders from "@/app/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Globetrotter",
  description: "The ultimate travel guessing game!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
