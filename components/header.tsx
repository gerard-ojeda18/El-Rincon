"use client"

import { useState } from "react"
import { Menu, X, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <Scissors className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wide text-foreground">El Rincón</span>
            <span className="text-xs tracking-[0.2em] text-primary uppercase">Barbería</span>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contacto">Reservar Cita</a>
          </Button>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Reservar Cita</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
