import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold">
            Bengaluru<span className="bg-red-600 text-white px-1 mx-1 rounded">TV</span>Guru
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white px-6 py-2 font-bold">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>


      </div>
    </header>
  )
}
