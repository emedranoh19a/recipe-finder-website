import { Nunito, Nunito_Sans } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  //semibold, bold, extrabold
  weight: ["600","700","800"]
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  //medium, bold
  weight: ["500","700"]
});
