"use client";
import { useEffect, useRef, useState } from "react";

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
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    alt: "Estilo moderno",
  },
];

function AnimatedImage({ src, alt, index, rowSpan }: { src: string; alt: string; index: number; rowSpan?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg group ${rowSpan ? "row-span-2" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-foreground font-medium text-sm px-4 text-center">
          {alt}
        </span>
      </div>
    </div>
  );
}

export function Gallery() {
  const { ref: headerRef, inView: headerInView } = (() => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
    return { ref, inView };
  })();

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            <AnimatedImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
              rowSpan={index === 0 || index === 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
