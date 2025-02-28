import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import MainLayout from "@/components/templates/layout";
import TanstackProvider from "@/providers/TanstackProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analytical Dashboard",
  description: "Analytical Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <TanstackProvider>
            <AnalyticsProvider>
              <MainLayout>{children}</MainLayout>
            </AnalyticsProvider>
          </TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
