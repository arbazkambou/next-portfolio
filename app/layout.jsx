import { Outfit } from "next/font/google";
import "./globals.css";

//componets
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
//theme provider

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Arbaz's Portfolio",
  description:
    "Discover Arbaz's web development portfolio, showcasing innovative projects and expertise in modern technologies like React, Node.js, Next.js, and more. Let's work together to create amazing web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
