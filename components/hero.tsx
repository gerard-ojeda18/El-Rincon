import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <div className="mb-6">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Desde 1985
          </span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="block">Barbería</span>
          <span className="block text-primary mt-2">El Rincón</span>
        </h1>
        
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-primary/50" />
          <span className="text-muted-foreground text-sm tracking-wider">Tradición y Estilo</span>
          <div className="h-px w-12 bg-primary/50" />
        </div>
        
        <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Donde el arte del corte se encuentra con la tradición. Ofrecemos una experiencia 
          única de grooming masculino con los mejores profesionales de la ciudad.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <a href="#contacto">Reservar Cita</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 px-8">
            <a href="#servicios">Ver Servicios</a>
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Lun - Sáb: 9:00 - 20:00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Calle Principal 123, Centro</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
