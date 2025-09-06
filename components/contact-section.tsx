import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Call Back</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Get Quick Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Your Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-bold">
                  <Image src="/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">We'll contact you within 5 minutes</p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>6363053425</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>bangloretvguru@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-4 px-6">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-bold">

                  <Image src="/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
                  Chat on WhatsApp Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent py-6 text-lg font-bold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
