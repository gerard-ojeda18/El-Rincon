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
    src: "https://lh3.googleusercontent.com/rd-gg-dl/AFfU-fKBER-vvX9hrb8DQ19xz86McAqL3cB5yqoIOlzXCxnvF8TMznXbH6TZgMDLp_4yEv5csnrbcb43drpqtlp2LzyQmcB-xQXM9rkbu-OXsHVBynXdKI8F8Kvax2e0wl2do81Rqaqx3zuLTByn097uBhzhzUaDDkqL5MRFcGNJfu8kP-5wJNof7ssR5KIKtcy02G6mdRKtFHN1VguEdvFd5HUW0oGjh2sN9JC0cNtT92aj0XNfNf1LN0Kj-IBC6zrpOxtYwkrWPyqarDTj5psDXG593oJdp0Yzv00m15gdzxfbmQ85Myr7ZeJFloV0T2GzvmwhGdaKxLaliawTEab50y5RzUEZ-S3cTGoUWArVSMMMV6XpeLnR08VW7OIJ9fZ0r6XjMLtvCeyNm37KI5VMak32KSXBjugIuzdklcXb2MsZJBNLoOm32cGQaFBl3pT6L27YSz8z2FLdVyLAYLMfNh_Vux-AmkTi1aQokNcKU5s3HLpVIOn6yBRYVKDgFKu3o5f3PO3S-AB6s_Qr7UZ8O39E--LwYWADY-v8yb4m2Y3uzTjIEDZ9wmioLlBtlKoBK999-d7F541WE4TaKnFHUGp-zHRkhRUauc7meCloo5B8W9cFFYI2dT-bt-7-YCO3Ha_Vp5987KcRp6iwlaymbXrz8ngVRefZtJKsYRSzRJpXjDqBDinD_jbmt5svsW8lxxAU8Uj-rtAeJjX2YsM1AMhxVBiwBR6YLJqGId524EYxoJTem7SsXLZQPtc-ZADsIiiO8dDy07XsrhiDaO_bKxQoLTcyLtA3yt-Ea5tgGjzwAguJsPWrsGvz6-y8SOvgBy-nak489wz7hADRh-MBZCLWOqcv1lPj3GBq-acHhPuomK1rFxilgIBqZMkyVZNJfBVgrwY66S8oSc6OxZwDXpDTURl6EPNmXZ8_5GwYdTZJMARtDe09Q8PpGvD7dOM3j5WHOHHR1JQ0kWBYgg3LcNzrGifv7LgicpHYlo7_WEkHyUAbGXpoqHxME5ybbyrfj4TQdfutjw2aK7DZBTbJAhYy45GCaY-PSVogwzU9QyHXDlgQ1ihW6oLaoFmx_AnSfkyQzhb6khZIeeG69UD7WeUe3EOUvy3BK18M_OMJ93QT47DnMdJZGiGvc-Q0qZktFxaI34XSH7dB_APj-a7ob4rWy9QAG_zMxv1IEOwrESb_sWtJdOTYFNFJ4LokJOrzhqCfVP7LP-T9gY7kJaRlkY0=s1024-rj",
    alt: "Estilo moderno",
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
