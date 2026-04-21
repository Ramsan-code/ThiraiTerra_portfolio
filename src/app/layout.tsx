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
  title: "ThiraiTerra",
  description: "ThiraiTerra .",
};




import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geologica.variable} antialiased selection:bg-amber-500/30 overflow-x-hidden min-h-screen flex flex-col transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}

