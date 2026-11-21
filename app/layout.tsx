import type { Metadata } from "next";
import { Geist_Mono, Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/ui/header";
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
      <header className="sticky top-0 z-40 w-full">
        <Header />
      </header>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <footer>
        <Footer2 />
      </footer>
    </html>
  );
}
