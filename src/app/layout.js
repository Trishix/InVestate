// import FloatingNav from "./components/ui/floating-navbar.js";
import { FloatingNav } from "../components/ui/floating-navbar.js";
import Footer from "../components/footer.js";
import Navbar from "@/components/navbar.js";
import "./globals.css";


export const metadata = {
  title: 'Investate',
  description: 'Investate in an one stop solution for your real estate needs. From property listings to market insights, we provide everything you need to make informed decisions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FloatingNav />
        {children}
        <Footer />
        </body>
    </html>
  )
}
