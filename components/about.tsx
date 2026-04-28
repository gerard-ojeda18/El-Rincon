"use client";
import { Award, Users, Clock, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Clock, value: 30, suffix: "+", label: "Años de Experiencia" },
  { icon: Users, value: 15, suffix: "K+", label: "Clientes Satisfechos" },
  { icon: Award, value: 5, suffix: "", label: "Barberos Expertos" },
  { icon: Star, value: 4.9, suffix: "", label: "Valoración Media" },
];

function useInView(threshold = 0.2) {
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

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-3xl font-bold text-foreground mb-1">
      {value % 1 === 0 ? Math.round(count) : count.toFixed(1)}{suffix}
    </div>
  );
}

export function About() {
  const { ref: textRef, inView: textInView } = useInView();
  const { ref: imgRef, inView: imgInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section id="nosotros" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div
            ref={textRef}
            style={{
              opacity: textInView ? 1 : 0,
              transform: textInView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
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

          {/* Imagen */}
          <div
            ref={imgRef}
            className="relative"
            style={{
              opacity: imgInView ? 1 : 0,
              transform: imgInView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
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

        {/* Stats con contadores */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
