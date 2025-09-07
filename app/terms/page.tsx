export default function TermsAndConditions() {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Important Disclaimer</h2>
              <p className="text-yellow-800">
                We are a third-party repair center and are not affiliated with any TV manufacturer. All brand names,
                logos, and trademarks mentioned on this website are the property of their respective owners.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Service Agreement</h2>
              <p>
                By booking our services, you agree to these terms and conditions. Our repair services are provided on a
                best-effort basis with professional expertise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Warranty Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We provide a 6-month warranty on repairs performed by our technicians</li>
                <li>Warranty covers the specific repair work done, not the entire device</li>
                <li>Warranty is void if the device is tampered with by unauthorized personnel</li>
                <li>Physical damage or liquid damage is not covered under warranty</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Service Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free estimation and diagnosis at your doorstep</li>
                <li>Service charges are communicated before starting any repair work</li>
                <li>Payment is due upon completion of service</li>
                <li>We accept cash, UPI, and card payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Liability Limitations</h2>
              <p>
                Our liability is limited to the cost of repair services provided. We are not responsible for data loss,
                software issues, or pre-existing hardware problems not related to our repair work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Service Areas</h2>
              <p>
                We provide doorstep repair services across Bengaluru. Service availability may vary based on location
                and technician availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
              <p>
                For any queries or concerns regarding these terms, please contact us at 080-62178864             or through WhatsApp.
              </p>
            </section>

            <div className="bg-gray-50 border rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2024
                <br />
                These terms and conditions are subject to change without prior notice. Please review them periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
