"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Corrientes 1234, CABA, Buenos Aires",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 11 1234-5678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@barberiaelrincon.com.ar",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Sáb: 9:00 - 20:00",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Gracias por tu mensaje. Te contactaremos pronto para confirmar tu cita.")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Reserva Tu Cita
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para reservar tu cita o resolver cualquier duda. 
            Estamos aquí para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.title} className="bg-card border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6157762565684!2d-3.7037974!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d5d8e9b8d%3A0x8867a5c0a4f9a3!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Barbería El Rincón"
              />
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Solicitar Cita
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="54 11 1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Contanos qué servicio te interesa o cualquier preferencia..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
