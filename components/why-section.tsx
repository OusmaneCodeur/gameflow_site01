"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Navigation, WifiOff, ShieldCheck, Gamepad2, type LucideIcon } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "IA personnalisée",
    description: "Notre assistant IA apprend de vos préférences pour des recommandations toujours plus pertinentes.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Navigation,
    title: "Navigation intelligente",
    description: "Smart Map avec AR optionnelle pour vous guider sans effort dans les sites olympiques.",
    gradient: "from-secondary to-secondary/50",
  },
  {
    icon: WifiOff,
    title: "Accessibilité offline",
    description: "Téléchargez les cartes et horaires pour un accès sans interruption, même hors ligne.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité renforcée",
    description: "Bouton SOS avec géolocalisation et connexion directe aux services de secours.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Gamepad2,
    title: "Expérience ludique",
    description: "Collectez des badges, relevez des défis et grimpez dans le classement des fans JOJ.",
    gradient: "from-primary to-primary/50",
  },
]

interface ReasonCardProps {
  reason: {
    icon: LucideIcon
    title: string
    description: string
    gradient: string
  }
  index: number
}

function ReasonCard({ reason, index }: ReasonCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const IconComponent = reason.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-300 hover:scale-[1.02] ${
        index === 4 ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
      
      {/* Icon */}
      <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${reason.gradient} p-4 shadow-lg`}>
        <IconComponent className="h-8 w-8 text-primary-foreground" />
      </div>
      
      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold text-foreground">{reason.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
      
      {/* Corner Accent */}
      <div className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${reason.gradient} opacity-20 blur-2xl`} />
    </motion.div>
  )
}

export function WhySection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Pourquoi GameFlow
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            {"L'innovation au service de"}
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              votre expérience
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
