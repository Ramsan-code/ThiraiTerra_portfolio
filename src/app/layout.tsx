import type { Metadata } from "next";
import { Figtree, Oswald } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const kensington = Oswald({
  variable: "--font-kensington",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className="dark">
      <body
        className={`${figtree.variable} ${kensington.variable} antialiased selection:bg-amber-500/30`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

