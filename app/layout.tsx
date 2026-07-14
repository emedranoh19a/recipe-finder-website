import { ReactElement } from "react";

import { Nunito, Nunito_Sans } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito"
});
const nunitoSans = Nunito_Sans(
  {
    subsets: ["latin"],
    variable: "--nunito-sans"
  }
);
export default function Layout({ children }: { children: ReactElement }) {
  return <html>
    <body className={`text-lg ${nunito.className}`}>
      {children}
    </body>
  </html>
}

//nunito weights
//nunitosans wieght

// import { Inter, Roboto_Mono } from 'next/font/google'
 
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })
 
// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })