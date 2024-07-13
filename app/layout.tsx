import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "NextJs Practice",
  description: "An app made to practice NextJs",
  keywords: 'NextJs, Practice, Frontend'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
