import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
       <a href="https://wa.me/917795967453?text=Hi%20I%20would%20like%20to%20request%20TV%20repair%20services" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
      <Image src="/whatsapp-logo.png" alt="WhatsApp" width={48} height={48} className="whatsapp-icon" />
    </a>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
  <div className="relative md:hidden">
    <div className="absolute inset-0 sparkle-border rounded-t-lg"></div>
    <a href="tel:08062178864" 
       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 flex flex-col items-center justify-center text-lg font-bold shadow-lg relative z-10 call-button transition-all duration-300">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 phone-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call Now</span>
      </div>
      
    </a>
  </div>
</div>



    </div>
  )
}
