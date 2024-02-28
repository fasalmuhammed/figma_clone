import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const work_Sans = Work_Sans({ 
  subsets: ["latin"] ,
  variable: '--font-work-sans',
  weight:['500','600','700']
});

export const metadata: Metadata = {
  title: "figma clone",
  description: "A minimalist figma clone using fabric.js and Liveblocks for ral-time colloboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_Sans.className} bg-primary-grey-200` }>
        <Room>
          {children}
        </Room>
       
        
        </body>
    </html>
  );
}
