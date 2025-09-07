import { Card, CardContent } from "@/components/ui/card"
import { Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ravi",
      location: "Indiranagar",
      text: "Excellent service! My Smart TV stopped working, and they fixed it the same day at my home. Professional and quick!",
      rating: 5,
    },
    {
      name: "Ananya.S",
      location: "Whitefield",
      text: "Affordable and transparent. The technician explained everything clearly and the TV works like new. Highly recommend!",
      rating: 5,
    },
    {
      name: "Karthik",
      location: "Jayanagar",
      text: "Fast and reliable! They repaired my 55-inch OLED TV within a few hours. Great experience overall.",
      rating: 5,
    },
    {
      name: "Priya.R",
      location: "Koramanagala",
      text: "Very professional team. No hidden charges and they even gave a warranty for the repair. Super happy with their service.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4 text-black">What Our Customers Say</h2>
          <p className="text-gray-600">Real experiences. Real satisfaction.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6">
                <p className="text-sm mb-4 leading-relaxed text-gray-800">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-medium text-sm text-blue-600">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
             
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">⭐ 4.8/5 Rated by 10,000+ Happy Customers</p>
          <h3 className="text-3xl font-bold mb-4 text-black">Need your TV fixed today?</h3>
          <p className="text-gray-600 mb-8">
            Our expert technicians are ready to help – fast, affordable, and hassle-free!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/919845188786?text=Hi%20I%20would%20like%20to%20request%20TV%20repair%20services">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold">
              <Image src="/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
              Chat on WhatsApp Now
            </Button>
            </Link>
             <Link href="tel:080-62178864">
            <Button className="bg-blue-600 hover:bg-blue-700  text-white py-6 text-lg font-bold min-w-[330px]">
              <Image width={30} height={30} src="/call.gif" alt="call"/>
              Call Now
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
