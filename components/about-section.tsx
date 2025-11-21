'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleWhatsAppSubmit = () => {
    if (!name || !phone) {
      alert("Please enter both your name and phone number.")
      return
    }

    const message = `Hi, my name is ${name} and my phone number is ${phone}. I would like to request TV repair services.`
    const whatsappURL = `https://wa.me/918904822800?text=${encodeURIComponent(message)}`

    // Open WhatsApp and reset the form
    window.open(whatsappURL, "_blank")
    setName("")
    setPhone("")
  }

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-black">
              About Us – Your Trusted TV Repair Partner in Bengaluru
            </h2>

            <div className="mb-8">
              <p className="text-gray-800 leading-relaxed mb-4">
                At <strong>Bengaluru TV Guru</strong>, we are a local TV repair service dedicated to serving the entire
                Bengaluru region. With years of experience, our <strong>trained and certified technicians</strong>{" "}
                specialize in repairing all types of TVs, including{" "}
                <strong>LED, OLED, QLED, 4K, Plasma and Smart TVs</strong>. We focus on{" "}
                <strong>quick, reliable, and transparent service</strong>, ensuring your TV is repaired and working
                perfectly the same day.
              </p>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            <h3 className="text-2xl font-bold mb-6 text-black">Our TV Repair Services</h3>
            <p className="text-gray-800 mb-4">
              We provide <strong>doorstep repair and installation</strong> for all types of televisions, including:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <span className="text-gray-800">LED, LCD, OLED, QLED, Plasma and Smart TVs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <span className="text-gray-800">No Power / Not Turning On Issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <span className="text-gray-800">Sound Problems & No Display</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <span className="text-gray-800">Screen or Panel Repairs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <span className="text-gray-800">Software & Connectivity Issues</span>
              </li>
            </ul>

            <p className="text-gray-800">
              Our expert technicians handle all TV sizes and models, ensuring quick and reliable service with a warranty
              on repairs.
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center text-black">Request a Call Back</h3>

              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
                <Input
                  placeholder="Your Phone Number"
                  type="tel"
                  value={phone}
                   onChange={(e) => {
                      const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10)
                      setPhone(onlyNums)
                    }}
                  className="w-full"
                />
                <Button
                  onClick={handleWhatsAppSubmit}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
