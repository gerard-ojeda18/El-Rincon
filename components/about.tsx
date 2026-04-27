import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: Clock, value: "30+", label: "Años de Experiencia" },
  { icon: Users, value: "15K+", label: "Clientes Satisfechos" },
  { icon: Award, value: "5", label: "Barberos Expertos" },
  { icon: Star, value: "4.9", label: "Valoración Media" },
]

export function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Más que una Barbería, una Tradición
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Desde 1985, Barbería El Rincón ha sido el punto de encuentro para 
                caballeros que buscan más que un simple corte de pelo. Somos un 
                espacio donde la tradición se fusiona con las tendencias actuales.
              </p>
              <p>
                Nuestro equipo de barberos expertos combina técnicas clásicas con 
                estilos contemporáneos, garantizando que cada cliente salga con 
                un look que refleje su personalidad única.
              </p>
              <p>
                Utilizamos solo productos de primera calidad y ofrecemos un ambiente 
                relajado donde puedes desconectar del mundo exterior mientras te 
                atendemos con la dedicación que mereces.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                alt="Interior de la barbería"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-sm opacity-90">Años de historia</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
