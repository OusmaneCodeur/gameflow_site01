"use client"

import { motion } from "framer-motion"
import { Download, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Olympic Stadium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Animated Glow Orbs */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex rounded-2xl bg-background/30 p-2 backdrop-blur-sm"
            >
              <Image
                src="/logoGameflow.jpeg"
                alt="Logo GameFlow"
                width={68}
                height={68}
                className="rounded-xl ring-1 ring-border/60 transition duration-300 hover:scale-105"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">JOJ Sénégal 2026</span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              <span className="text-glow-primary">GameFlow</span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                {"L'expérience digitale"}
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                des JOJ réinventée
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-lg text-muted-foreground sm:text-xl text-pretty">
              Une plateforme intelligente qui connecte, guide et engage chaque utilisateur lors des Jeux Olympiques de la Jeunesse.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-secondary px-8 text-primary-foreground shadow-lg hover:opacity-90 glow-primary"
              >
                <Download className="h-5 w-5" />
                Télécharger maintenant
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "50K+", label: "Utilisateurs" },
                { value: "100+", label: "Événements" },
                { value: "4.9", label: "Note App" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex-1"
          >
            <div className="relative mx-auto w-64 sm:w-80">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary to-secondary opacity-50 blur-3xl" />
              
              {/* Phone Frame */}
              <div className="relative animate-float">
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-foreground/10 bg-card shadow-2xl">
                  <Image
                    src="/images/mockup-home.jpg"
                    alt="GameFlow App Home Screen"
                    width={320}
                    height={640}
                    className="w-full"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -left-16 top-20 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                      <Sparkles className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">IA Active</div>
                      <div className="text-[10px] text-muted-foreground">Assistant prêt</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -right-12 bottom-32 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Score en direct</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
        >
          <Image
            src="/logoGameflow.jpeg"
            alt="GameFlow"
            width={52}
            height={52}
            className="rounded-xl ring-1 ring-border/60 transition duration-300 hover:scale-105"
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-medium">Explorer</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
