import { ReactElement } from "react";
import "./globals.css";
import { nunito, nunitoSans } from "./styles/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html>
      <body
        className={`antialiased select-none relative z-0 bg-neutral-100 text-neutral-800 ${nunito.variable} ${nunitoSans.variable}`}>
        <Navbar />
        <main className="relative container px-4 mx-auto min-h-screen w-full flex flex-col items-center">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
