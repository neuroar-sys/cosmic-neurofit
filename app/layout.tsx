// app/layout.tsx
import type { Metadata } from "next";
import { Libre_Franklin, Fjalla_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/cosmic/blocks/ecommerce/CartProvider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
// import Banner from "@/components/Banner";
import { Suspense } from "react";
import { AuthProvider } from "@/cosmic/blocks/user-management/AuthContext";

const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans" });
const display = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Programas cognitivos de Transformación de Hábitos",
  description: "Programas breves diseñados para ayudar a las personas a transformar sus hábitos y comportamientos de manera personalizada y eficaz.",
  openGraph: {
    title: "Neuroar, sistemas y programas neurocognitivos de avanzada.",
    description: "Sistema de gestión de transformación de hábitos.",
    images:
      "https://https://file.notion.so/f/f/8166b9fc-920e-4068-87a2-faa4a3557fec/4849778f-1398-414c-97d5-812c7985fcc6/1000000374.png?table=block&id=18dea117-7729-8044-937d-c52212f741f9&spaceId=8166b9fc-920e-4068-87a2-faa4a3557fec&expirationTimestamp=1738958400000&signature=plkMllSz6_j26Q_pICqfeIQ-u78nFI1__rjVuV4N6Kg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} font-sans md:p-0 bg-white dark:bg-black h-dvh w-full`}
      >
        <Suspense>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <CartProvider>
                <div>
                  <Banner />
                  <Header />
                  {children}
                </div>
                <Footer />
              </CartProvider>
              <TailwindIndicator />
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
