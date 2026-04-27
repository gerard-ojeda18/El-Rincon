const images = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Corte de cabello profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2072&auto=format&fit=crop",
    alt: "Afeitado tradicional",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
    alt: "Arreglo de barba",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074&auto=format&fit=crop",
    alt: "Herramientas de barbería",
  },
  {
    src: "https://images.unsplash.com/photo-1593702288056-f5e3a5e28c5c?q=80&w=2070&auto=format&fit=crop",
    alt: "Estilo moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1634302086411-5d82c5ec7c3c?q=80&w=2070&auto=format&fit=crop",
    alt: "Detalle de corte",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Galería
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro Trabajo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Cada corte cuenta una historia. Descubre el arte y la dedicación 
            que ponemos en cada uno de nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 || index === 5 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium text-sm px-4 text-center">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
