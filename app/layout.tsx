import type { Metadata } from "next";
import "./globals.css";
import {
  Manrope,
  Bricolage_Grotesque,
  Oxygen_Mono,
  League_Spartan,
  Darker_Grotesque,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const localfont = localFont({
  src: "./fonts/local.otf",
});

const League_Spartan_Variant = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ManropeVariable = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Oxygen_Mono_Varoable = Oxygen_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

const Bricolage_Grotesque_Variable = Bricolage_Grotesque({
  weight: ["200", "300", "500", "800"],
  subsets: ["latin"],
});

const dark = Darker_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniket Kangane - Full Stack Developer",
  description:
    "Aniket is a Full Stack Developer from India and he likes to craft dynamic and scalable full-stack applications that meet the evolving needs of modern businesses.",
  icons: {
    icon: "/profile.png", // or "/favicon.png" if you're using PNG format
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bricolage_Grotesque_Variable.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
