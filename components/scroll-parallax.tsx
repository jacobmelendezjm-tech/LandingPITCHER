"use client"

import { useEffect, useRef } from "react"

// Desplaza y desvanece su contenido según el scroll, para un efecto parallax.
export function ScrollParallax({
  speed = 0.4,
  className,
  children,
}: {
  speed?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const progress = Math.min(y / window.innerHeight, 1)
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`
      el.style.opacity = String(1 - progress)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
