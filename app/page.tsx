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
       <a href="https://wa.me/919845188786?text=Hi%20I%20would%20like%20to%20request%20TV%20repair%20services" className="whatsapp-btn animate-pulseRing" target="_blank" rel="noopener noreferrer">
      <Image src="/whatsapp-logo.png" alt="WhatsApp" width={48} height={48} className="whatsapp-icon" />
    </a>
      <Header />
      <main className="pt-16">
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
       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 flex flex-col items-center justify-center text-[20px] font-bold shadow-lg relative z-10 call-button transition-all duration-300">
      <div className="flex items-center space-x-1 pb-1">
        <Image width={30} height={30} src="/call.gif" alt="call"/>
        <span >Call Now: 080-62178864</span>
      </div>
       <span className="text-[14px]">Doorstep Service With Free Estimate</span>
    </a>
  </div>
</div>



    </div>
  )
}
