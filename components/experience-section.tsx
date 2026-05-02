"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Activity, MessageSquare, CreditCard, Bell } from "lucide-react"
import Image from "next/image"

const journeySteps = [
  {
    icon: MapPin,
    title: "Arrivée au stade",
    description: "Navigation fluide via Smart Map avec itinéraires optimisés et points d'intérêt.",
    image: "/images/user-navigation.jpg",
  },
  {
    icon: Calendar,
    title: "Découverte des matchs",
    description: "Explorez les événements, ajoutez vos favoris et planifiez votre journée parfaite.",
    image: "/images/friends-cheering.jpg",
  },
  {
    icon: Activity,
    title: "Suivi des scores",
    description: "Scores en temps réel, statistiques détaillées et classements actualisés instantanément.",
    image: "/images/athletes.jpg",
  },
  {
    icon: MessageSquare,
    title: "Assistant IA",
    description: "Posez vos questions à notre chatbot intelligent pour des réponses personnalisées.",
    image: "/images/ai-chatbot.jpg",
  },
  {
    icon: CreditCard,
    title: "Paiement facile",
    description: "Achetez vos billets et snacks via Wave ou Orange Money en quelques clics.",
    image: "/images/mobile-payment.jpg",
  },
  {
    icon: Bell,
    title: "Restez informé",
    description: "Recevez des notifications sur vos équipes favorites et événements à ne pas manquer.",
    image: "/images/crowd-celebration.jpg",
  },
]

function JourneyStep({ step, index }: { step: typeof journeySteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
        <Image
          src={step.image}
          alt={step.title}
          width={600}
          height={400}
          className="w-full h-64 lg:h-80 object-cover"
        />
      </div>

      {/* Content */}
      <div className={`flex-1 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
        {/* Step Number */}
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-lg font-bold text-primary-foreground">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Icon & Title */}
        <div className="mb-3 flex items-center gap-3">
          <step.icon className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground lg:text-2xl">{step.title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Votre journée
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Une journée avec{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GameFlow
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Découvrez comment GameFlow transforme chaque moment de votre expérience aux JOJ.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-16 lg:space-y-24">
          {journeySteps.map((step, index) => (
            <JourneyStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
