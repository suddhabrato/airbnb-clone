import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone developed with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
