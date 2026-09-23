import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { ScrollParallax } from "@/components/scroll-parallax"
import { SilkShader } from "@/components/silk-shader"

// Estados hover/abierto translúcidos para los ítems del menú sobre el header de vidrio
const glassItem =
  "bg-transparent hover:bg-white/15 focus:bg-white/15 data-open:bg-white/15 data-popup-open:bg-white/15"

const heroVideos = ["latte-art-1", "latte-art-2", "latte-art-3"]

const services = [
  {
    title: "Diseño web",
    href: "#diseno",
    description: "Sitios modernos y responsivos.",
  },
  {
    title: "Desarrollo",
    href: "#desarrollo",
    description: "Aplicaciones a medida.",
  },
  { title: "SEO", href: "#seo", description: "Mejora tu posicionamiento." },
  {
    title: "Soporte",
    href: "#soporte",
    description: "Mantenimiento continuo.",
  },
]

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-40 -mb-16 w-full border-b border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_8px_32px_rgb(0_0_0/0.25)] backdrop-blur-[30px] backdrop-saturate-150">
        <div className="mx-auto grid h-16 max-w-[1368px] grid-cols-[1fr_auto_1fr] items-center px-4">
          <a
            href="/"
            aria-label="Inicio"
            className="flex items-center justify-self-start"
          >
            {/* Reemplazar por el logotipo, p. ej. <Image src="/logo.svg" alt="Logo" width={120} height={40} /> */}
            <div className="flex h-10 w-32 items-center justify-center rounded-md border border-dashed border-white/40 text-xs text-white/80">
              Logo
            </div>
          </a>

          <NavigationMenu align="center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(navigationMenuTriggerStyle(), glassItem)}
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={glassItem}>
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-1 sm:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink
                          href={service.href}
                          className="flex-col items-start gap-1"
                        >
                          <span className="font-medium">{service.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {service.description}
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#nosotros"
                  className={cn(navigationMenuTriggerStyle(), glassItem)}
                >
                  Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contacto"
                  className={cn(navigationMenuTriggerStyle(), glassItem)}
                >
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="justify-self-end">
            <Button>Empezar</Button>
          </div>
        </div>
      </header>

      <section className="relative h-svh w-full overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3">
          {heroVideos.map((video) => (
            <video
              key={video}
              className="size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src={`/video/${video}.webm`} type="video/webm" />
              <source src={`/video/${video}.mp4`} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="absolute inset-0 bg-[red] opacity-50 mix-blend-hue" />

        <ScrollParallax className="relative mx-auto flex h-svh w-full max-w-[1368px] items-center justify-start">
          <div className="flex max-w-xl flex-col items-start gap-4 text-white">
            <Reveal from="left">
              <h1 className="text-[6.48rem] leading-none font-bold text-balance [-webkit-text-stroke:4px_black] [paint-order:stroke_fill]">
                Pitcher Art
              </h1>
            </Reveal>
            <Reveal from="right" delay={200}>
              <h2 className="text-3xl font-semibold text-balance [-webkit-text-stroke:3px_black] [paint-order:stroke_fill]">
                El arte de la jarra
              </h2>
            </Reveal>
          </div>
        </ScrollParallax>
      </section>

      <section className="relative h-auto w-full overflow-hidden bg-[#3a3a3a] py-[35px]">
        <SilkShader />
        <div className="relative mx-auto grid w-full max-w-[1368px] grid-cols-1 gap-8 md:grid-cols-2">
          <div className="min-h-64 min-w-0 bg-white p-8 text-black">
            <Reveal from="left">
              <h3 className="mb-4 text-3xl font-semibold">
                ¿Qué es el latte art?
              </h3>
            </Reveal>
            <Reveal from="left" delay={150}>
              <p className="text-[1.7rem] leading-relaxed text-pretty break-words">
                El latte art es la técnica de verter leche texturizada sobre un
                espresso para dibujar figuras en la superficie, como corazones,
                tulipanes o rosettas. Nace de la unión entre la crema del café y
                una microespuma sedosa, y refleja el cuidado del barista en cada
                taza.
              </p>
            </Reveal>
          </div>
          <div className="min-h-64 min-w-0 bg-black p-8 text-white">
            <Reveal from="right">
              <h3 className="mb-4 text-3xl font-semibold">
                La importancia de un buen pitcher
              </h3>
            </Reveal>
            <Reveal from="right" delay={150}>
              <p className="text-[1.7rem] leading-relaxed text-pretty break-words">
                El pitcher es la extensión de la mano del barista. Un pico bien
                definido permite controlar el flujo de leche y trazar líneas
                precisas, mientras que el acero inoxidable ayuda a texturizar y
                a medir la temperatura al tacto. Elegir el tamaño adecuado para
                cada taza marca la diferencia en cada dibujo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
