"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Bot,
  Map,
  Calendar,
  Activity,
  Bell,
  Trophy,
  Wallet,
  WifiOff,
  Globe,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Assistant IA intelligent",
    description: "Un chatbot personnalisé qui répond à toutes vos questions sur les événements, horaires et activités.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Map,
    title: "Smart Map",
    description: "Navigation intelligente avec géolocalisation en temps réel et itinéraires optimisés.",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Calendar,
    title: "Gestion des événements",
    description: "Planifiez votre journée, ajoutez des événements à vos favoris et recevez des rappels.",
    color: "from-primary to-secondary",
  },
  {
    icon: Activity,
    title: "Suivi en temps réel",
    description: "Scores, classements et statistiques actualisés en direct pour tous les sports.",
    color: "from-secondary to-primary",
  },
  {
    icon: Bell,
    title: "Notifications intelligentes",
    description: "Alertes personnalisées basées sur vos préférences et vos équipes favorites.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Gagnez des badges, participez à des défis et montez dans le classement des fans.",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Wallet,
    title: "Paiement mobile",
    description: "Intégration Wave et Orange Money pour des paiements rapides et sécurisés.",
    color: "from-primary to-secondary",
  },
  {
    icon: WifiOff,
    title: "Mode offline",
    description: "Accédez aux informations essentielles même sans connexion internet.",
    color: "from-secondary to-primary",
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Interface disponible en français, anglais et wolof pour une accessibilité maximale.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Shield,
    title: "Sécurité SOS",
    description: "Bouton d'urgence avec géolocalisation pour une assistance immédiate.",
    color: "from-secondary to-secondary/50",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Gradient Glow on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
        
        {/* Icon */}
        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 shadow-lg`}>
          <feature.icon className="h-6 w-6 text-primary-foreground" />
        </div>
        
        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 group-hover:border-primary/30" />
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Fonctionnalités
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Tout ce dont vous avez besoin,
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              dans une seule app
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            GameFlow combine intelligence artificielle, navigation avancée et gamification pour vous offrir une expérience olympique inoubliable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
