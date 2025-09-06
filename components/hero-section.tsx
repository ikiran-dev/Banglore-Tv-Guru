import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="md:py-16 py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance text-black">
            Top TV Repair Services at Your Doorstep in Bangalore
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your LED, LCD, OLED, QLED, Plasma & Smart TVs repaired by professionals today.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img
            src="/tv-repair-technicians-working-on-television.jpg"
            alt="TV Repair Technicians"
            className="rounded-lg shadow-lg w-full md:h-[500px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="space-y-4 hidden md:block">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Same-Day Doorstep Repair</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">6-month Repair Warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Free Estimation Before Repair</span>
            </div>
          </div>
          <div className="space-y-4 hidden md:block">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Serving Bengaluru Since 2015</span>
            </div>
          </div>
          <div className="space-y-4 md:hidden">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Same-Day Doorstep Repair</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">6-month Repair Warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Free Estimation Before Repair</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-bold text-lg">Serving Bengaluru Since 2015</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-4 font-bold">⭐ 4.8/5 Rated by 10,000+ Happy Customers</p>
        </div>
      </div>
    </section>
  )
}
