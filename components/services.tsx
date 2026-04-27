import { Scissors, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    name: "Corte Clásico",
    description: "Corte de cabello tradicional con acabado profesional y estilo atemporal.",
    price: "15",
  },
  {
    name: "Corte + Barba",
    description: "Combo completo de corte de cabello y arreglo de barba con navaja.",
    price: "25",
  },
  {
    name: "Afeitado Tradicional",
    description: "Afeitado clásico con navaja, toallas calientes y productos premium.",
    price: "18",
  },
  {
    name: "Diseño de Barba",
    description: "Perfilado y diseño de barba personalizado según tu estilo.",
    price: "12",
  },
  {
    name: "Corte Degradado",
    description: "Fade profesional con transiciones perfectas y acabado impecable.",
    price: "18",
  },
  {
    name: "Tratamiento Capilar",
    description: "Tratamiento hidratante y revitalizante para cabello y cuero cabelludo.",
    price: "20",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Arte y Precisión en Cada Corte
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra carta de servicios diseñados para el caballero moderno 
            que aprecia la calidad y el estilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.name} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Scissors className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{service.price}€</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Productos premium y atención personalizada incluidos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
