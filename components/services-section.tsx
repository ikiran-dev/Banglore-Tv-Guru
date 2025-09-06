import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Settings, Wrench, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Tv,
      title: "LED, LCD, OLED, QLED, Plasma and Smart TVs",
      description: "Expert repair for all TV types and brands",
    },
    {
      icon: Settings,
      title: "No Power / Not Turning On Issues",
      description: "Quick diagnosis and repair of power-related problems",
    },
    {
      icon: Wrench,
      title: "Display / Picture Quality Issues",
      description: "Fix screen problems, color issues, and display defects",
    },
    {
      icon: Shield,
      title: "Screen or Panel Repair",
      description: "Professional screen replacement and panel repairs",
    },
    {
      icon: Settings,
      title: "Software & Connectivity Issues",
      description: "Smart TV software updates and connectivity fixes",
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our TV Repair Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide doorstep repair and installation for all types of televisions, including:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-center text-sm text-muted-foreground">
            Our expert technicians handle all TV sizes and models, ensuring quick and reliable service with a warranty
            on repairs.
          </p>
        </div>
      </div>
    </section>
  )
}
