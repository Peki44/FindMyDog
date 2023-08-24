// import './globals.css'
// import { Metadata } from 'next'
// import { Nunito } from 'next/font/google'

// const inter = Nunito({ subsets: ['latin'] })

// const metadata: Metadata = {
//   title: 'FindMyDog',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}
//       </body>
//     </html>
//   )
// }

import "./globals.css";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "FindMyDog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}