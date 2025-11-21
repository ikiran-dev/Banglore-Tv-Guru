'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ContactSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const whatsappMessage = `Hi, my name is ${name} and my phone number is ${phone}. I would like to request TV repair services.`
  const whatsappURL = `https://wa.me/918904822800?text=${encodeURIComponent(whatsappMessage)}`

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
                  <Input
                  required
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Your Phone Number</Label>
                  <Input
                  required
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10)
                    setPhone(onlyNums)
                  }}
                  />
                </div>

               <Button
                  onClick={() => {
                    if (!name || !phone) {
                      alert("Please enter your name and phone number before submitting.")
                      return
                    }
                    const message = `Hi, my name is ${name} and my phone number is ${phone}. I would like to request TV repair services.`
                    const whatsappURL = `https://wa.me/918904822800?text=${encodeURIComponent(message)}`
                    window.open(whatsappURL, "_blank")

                    // Reset form fields
                    setName("")
                    setPhone("")
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-bold"
                >
                  <Image
                    src="/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Send via WhatsApp
                </Button>


                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 5 minutes
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <Link href="tel:+91-8904822800">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>080-62180344</span>
                      </div>
                    </Link>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>bangloretvguru@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col text-center space-y-4 px-6">
                <a
                  className="mb-4"
                  href="https://wa.me/918904822800?text=Hi%20I%20would%20like%20to%20request%20TV%20repair%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-bold">
                    <Image
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Chat on WhatsApp Now
                  </Button>
                </a>

                <Link href="tel:+91-8904822800">
                  <Button
                    size="lg"
                    className="border border-transparent text-white hover:bg-blue-700 w-full bg-blue-600 py-6 text-lg font-bold"
                  >
                    <Image width={30} height={30} src="/call.gif" alt="call" />
                    Call Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
