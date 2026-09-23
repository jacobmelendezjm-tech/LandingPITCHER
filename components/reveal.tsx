"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

// Anima a sus hijos (roll desde la izquierda o la derecha) cada vez que
// entran en pantalla, y los oculta de nuevo al salir.
export function Reveal({
  from = "left",
  delay = 0,
  className,
  children,
}: {
  from?: "left" | "right"
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.visible = String(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-from={from}
      data-visible="false"
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  )
}
