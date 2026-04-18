import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  axes: ["CRSV", "SHRP", "slnt"],
});




export const metadata: Metadata = {
  title: "ThiraiTerra | Venture Showcase of Film Infrastructure",
  description: "ThiraiTerra Venture Showcase. Secure capital, forged partnerships, and premier film industry infrastructure innovation. Incubating future cinema.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${geologica.variable} antialiased selection:bg-amber-500/30 overflow-x-hidden min-h-screen flex flex-col`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

