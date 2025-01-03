import Navigation from "@/app/_components/Navigation";
import Home from "@/app/page";
import Logo from "@/app/_components/Logo";
import {Josefin_Sans} from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display:"swap",
});

import "@/app/_style/globals.css"
import Header from "@/app/_components/Header";

export const metadata ={
  title:{
  template: "%s / The Wild Oasis",
  defaultTitle: "Welcome / The Wild Oasis",
  },
  description:"Luxury Cabin Hotel"
}

export default function RootLayout({children}) {
  return(
  <html lang='en'>
    <body className={`${josefin.className} bg-primary-950 text-gray-50 min-h-screen flex flex-col relative`}>
    <Header />
    <div className={"flex-1 px-8 py-12 grid"}>
      <main className={"max-w-7xl mx-auto w-full"}>{children}</main>
      <footer className={"mt-11 text-center font-bold"}>The Wild Oasis</footer>
    </div>
    </body>
  </html>
  )
}