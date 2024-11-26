import Navigation from "@/app/_components/Navigation";
import Home from "@/app/page";
import Logo from "@/app/_components/Logo";
import "@/app/_style/globals.css"

export const metadata ={
  title: "The Wild oasis",
}

export default function RootLayout({children}) {
  return(
  <html lang='en'>
    <body className="bg-blue-900 text-gray-50 min-h-screen">
      <header>
        <Logo/>
      </header>
      <Navigation />
      <main>{children}</main>
      <footer>TaiNgonheng</footer>
    </body>
  </html>
  )
}