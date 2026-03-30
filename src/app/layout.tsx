import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TarjetaControl — Controlá cada peso de tus ventas con tarjeta",
  description:
    "Servicio profesional para comercios que necesitan controlar, conciliar y optimizar sus cobros con tarjetas. Detectá errores, evitá pérdidas y tené información clara cada día.",
  keywords: ["control tarjetas", "conciliación ventas", "liquidaciones tarjetas", "comercios Argentina"],
  openGraph: {
    title: "TarjetaControl — Controlá cada peso de tus ventas con tarjeta",
    description: "Detectá errores, evitá pérdidas y tené información clara cada día sobre tus cobros con tarjetas.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#020817" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-[#020817] text-slate-100">{children}</body>
    </html>
  );
}
