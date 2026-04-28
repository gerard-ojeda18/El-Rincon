"use client";
import { Scissors, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Corte Clásico",
    description: "Corte de cabello tradicional con acabado profesional y estilo atemporal.",
  },
  {
    name: "Corte + Barba",
    description: "Combo completo de corte de cabello y arreglo de barba con navaja.",
  },
  {
    name: "Afeitado Tradicional",
    description: "Afeitado clásico con navaja, toallas calientes y productos premium.",
  },
  {
    name: "Diseño de Barba",
    description: "Perfilado y diseño de barba personalizado según tu estilo.",
  },
  {
    name: "Corte Degradado",
    description: "Fade profesional con transiciones perfectas y acabado impecable.",
  },
  {
    name: "Tratamiento Capilar",
    description: "Tratamiento hidratante y revitalizante para cabello y cuero cabelludo.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Services() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: gridRef, inView: gridInView } = useInView();

  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
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

        {/* Grid de cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Scissors className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {service.description}
                  </p>
                  <button
                  onClick={() => {
                  setTimeout(() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                   }}
                  className="mt-4 inline-block text-sm font-semibold text-primary border border-primary/30 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors text-center w-full cursor-pointer"
                   >
                  Reservar
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className="mt-12 text-center"
          style={{
            opacity: gridInView ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Productos premium y atención personalizada incluidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
