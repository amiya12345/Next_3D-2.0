import { cn } from "../lib/utils"
import { useEffect, useRef, useMemo } from "react"
import { createNoise3D } from "simplex-noise"
import { motion } from "framer-motion"

export const Vortex = ({ 
  particleCount = 700,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  baseHue = 220,
  backgroundColor = "#000000",
  containerClassName,
  className,
  children 
}) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationFrameRef = useRef()
  
  // Constants
  const CONSTANTS = useMemo(() => ({
    PARTICLE_PROP_COUNT: 9,
    BASE_TTL: 50,
    RANGE_TTL: 150,
    RANGE_HUE: 100,
    NOISE_STEPS: 3,
    OFFSETS: {
      X: 0.00125,
      Y: 0.00125,
      Z: 0.0005
    },
    TAU: 2 * Math.PI
  }), [])

  // Memoize particle properties array
  const particleProps = useMemo(() => 
    new Float32Array(particleCount * CONSTANTS.PARTICLE_PROP_COUNT),
    [particleCount, CONSTANTS.PARTICLE_PROP_COUNT]
  )

  const noise3D = useMemo(() => createNoise3D(), [])
  const center = useRef([0, 0])
  const tick = useRef(0)

  const initParticle = (i, canvas) => {
    const x = Math.random() * canvas.width
    const y = center.current[1] + (Math.random() * 2 - 1) * rangeY
    const ttl = CONSTANTS.BASE_TTL + Math.random() * CONSTANTS.RANGE_TTL
    const speed = baseSpeed + Math.random() * rangeSpeed
    const radius = baseRadius + Math.random() * rangeRadius
    const hue = baseHue + Math.random() * CONSTANTS.RANGE_HUE

    particleProps.set([
      x, y, 0, 0, // x, y, vx, vy
      0, ttl, speed, // life, ttl, speed
      radius, hue // radius, hue
    ], i)
  }

  const updateParticle = (i, ctx, canvas) => {
    const {
      OFFSETS: { X: xOff, Y: yOff, Z: zOff },
      NOISE_STEPS,
      TAU
    } = CONSTANTS

    const x = particleProps[i]
    const y = particleProps[i + 1]
    const noise = noise3D(x * xOff, y * yOff, tick.current * zOff) * NOISE_STEPS * TAU
    
    // Lerp velocity
    const vx = 0.5 * (particleProps[i + 2] + Math.cos(noise))
    const vy = 0.5 * (particleProps[i + 3] + Math.sin(noise))
    
    const life = particleProps[i + 4] + 1
    const ttl = particleProps[i + 5]
    const speed = particleProps[i + 6]
    const x2 = x + vx * speed
    const y2 = y + vy * speed
    
    // Draw particle
    const radius = particleProps[i + 7]
    const hue = particleProps[i + 8]
    const alpha = Math.abs(((life + ttl/2) % ttl) - ttl/2) / (ttl/2)
    
    ctx.save()
    ctx.lineCap = "round"
    ctx.lineWidth = radius
    ctx.strokeStyle = `hsla(${hue},100%,60%,${alpha})`
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.restore()

    // Update properties
    particleProps[i] = x2
    particleProps[i + 1] = y2
    particleProps[i + 2] = vx
    particleProps[i + 3] = vy
    particleProps[i + 4] = life

    if (x2 > canvas.width || x2 < 0 || y2 > canvas.height || y2 < 0 || life > ttl) {
      initParticle(i, canvas)
    }
  }

  const draw = (canvas, ctx) => {
    tick.current++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update all particles
    for (let i = 0; i < particleProps.length; i += CONSTANTS.PARTICLE_PROP_COUNT) {
      updateParticle(i, ctx, canvas)
    }

    // Apply glow effects
    ctx.save()
    ctx.filter = "blur(8px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.filter = "blur(4px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    animationFrameRef.current = requestAnimationFrame(() => draw(canvas, ctx))
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
      center.current = [innerWidth / 2, innerHeight / 2]
      
      // Reinit particles on resize
      for (let i = 0; i < particleProps.length; i += CONSTANTS.PARTICLE_PROP_COUNT) {
        initParticle(i, canvas)
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    
    if (canvas && ctx) {
      handleResize()
      draw(canvas, ctx)
      
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }
  }, [])

  return (
    <div className={cn("relative h-full w-full", containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef} />
      </motion.div>
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  )
}