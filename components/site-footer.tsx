import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full py-8 text-white bg-blue-950">
      <div className="container flex flex-col items-center justify-between px-4 md:px-6 gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">GARVIN PUMPS</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="#home" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-green-400 transition-colors">
            About Us
          </Link>
          <Link href="#products" className="hover:text-green-400 transition-colors">
            Products
          </Link>
          <Link href="#quality" className="hover:text-green-400 transition-colors">
            Quality
          </Link>
          <Link href="#contact" className="hover:text-green-400 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Developer Details Section */}
        <div className="text-center space-y-2 border-t border-blue-800 pt-4 w-full">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Garvin Pumps. All rights reserved.</p>
          <div className="text-xs text-gray-500">
            <p>
              Website Developed by <span className="text-green-400 font-medium">Sunil Verma</span>
            </p>
            <p>
              Contact Developer:
              <a
                href="mailto:radsting16@gmail.com"
                className="text-green-400 hover:text-green-300 transition-colors ml-1"
              >
                radsting16@gmail.com
              </a>
              {" | "}
              <a href="tel:+919826878405" className="text-green-400 hover:text-green-300 transition-colors">
                +91 98268 78405
              </a>
            </p>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/sunil-verma-887b27237/" // replace with your actual LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors ml-1"
              >
                sunil verma
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
