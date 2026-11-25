import type { Metadata } from "next";
import { Geist_Mono, Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import {SideBar} from "@/components/sideBar"
import { Footer2 } from "@/components/footer2";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Vilicus",
  description: "Sistema Vilicus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        inter.variable,
        geistMono.variable,
        instrumentSans.variable
      )}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex gap-2 min-h-screen">
            <SideBar />
            <div className="flex min-w-0 flex-1 flex-col">
              <main className="flex-1">{children}</main>
              <Footer2 />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
