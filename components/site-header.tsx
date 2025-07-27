import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1753279692/logo_ewfe22.png"
            alt="Garvin Pumps Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#home" className="hover:text-blue-900 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-900 transition-colors">
            About Us
          </Link>
          <Link href="#products" className="hover:text-blue-900 transition-colors">
            Products
          </Link>
          <Link href="#quality" className="hover:text-blue-900 transition-colors">
            Quality
          </Link>
          <Link href="#contact" className="hover:text-blue-900 transition-colors">
            Contact Us
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="#home" className="flex w-full items-center py-2 text-lg font-semibold">
                Home
              </Link>
              <Link href="#products" className="flex w-full items-center py-2 text-lg font-semibold">
                Products
              </Link>
              <Link href="#about" className="flex w-full items-center py-2 text-lg font-semibold">
                About Us
              </Link>
              <Link href="#quality" className="flex w-full items-center py-2 text-lg font-semibold">
                Quality
              </Link>
              <Link href="#contact" className="flex w-full items-center py-2 text-lg font-semibold">
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
