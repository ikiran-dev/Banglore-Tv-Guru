import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100 mb-[150px] md:mb-0">
  <div className="container max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold">
        Bengaluru<span className="bg-red-600 text-white px-1 mx-1 rounded">TV</span>Guru
      </div>

      <div className="flex items-center space-x-1 text-sm">
        <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
          Privacy Policy
        </a>
        <span className="text-blue-600">|</span>
        <Link href="/terms" className="text-blue-600 hover:text-blue-700 transition-colors">
          Terms & Conditions
        </Link>
        <span className="text-blue-600">|</span>
        <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors">
          Contact Us
        </a>
      </div>
    </div>

    {/* Disclaimer Section */}
    <div className="bg-red-100 text-red-800 px-4 py-3 my-5 border border-red-200 rounded text-center text-sm">
      <strong>Disclaimer:</strong> Bengaluru TV Guru is an independent third-party service center. 
      We are not affiliated with or authorized by any TV manufacturer. 
      All repairs and services will be chargeable, even if your product is still under the manufacturer’s warranty.
    </div>
  </div>
</footer>

  )
}
 <div className="bg-yellow-50 border-b border-yellow-200 py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> We are a third-party repair center and not affiliated with any TV
              manufacturer. All brand names and logos are trademarks of their respective owners.
            </p>
          </div>
        </div>