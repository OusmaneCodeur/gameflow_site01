"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/user-stadium.jpg",
    alt: "Utilisatrice dans un stade olympique",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/friends-cheering.jpg",
    alt: "Amis encourageant leur équipe",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/athletes.jpg",
    alt: "Athlètes en compétition",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/user-navigation.jpg",
    alt: "Navigation dans le village olympique",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/ai-chatbot.jpg",
    alt: "Interaction avec le chatbot IA",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/mobile-payment.jpg",
    alt: "Paiement mobile en situation",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/crowd-celebration.jpg",
    alt: "Célébration de la foule",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/swimming-event.jpg",
    alt: "Compétition de natation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/basketball-game.jpg",
    alt: "Match de basketball",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/soccer-match.jpg",
    alt: "Match de football",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/volleyball-game.jpg",
    alt: "Match de volleyball",
    span: "col-span-1 row-span-1",
  },
]

const mockups = [
  { src: "/images/mockup-home.jpg", alt: "Écran d'accueil GameFlow", title: "Accueil" },
  { src: "/images/mockup-map.jpg", alt: "Smart Map GameFlow", title: "Smart Map" },
  { src: "/images/mockup-scores.jpg", alt: "Scores en direct GameFlow", title: "Scores Live" },
  { src: "/images/mockup-ai.jpg", alt: "Assistant IA GameFlow", title: "Assistant IA" },
  { src: "/images/mockup-events.jpg", alt: "Événements GameFlow", title: "Événements" },
  { src: "/images/mockup-gamification.jpg", alt: "Gamification GameFlow", title: "Gamification" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mockupsRef = useRef(null)
  const isMockupsInView = useInView(mockupsRef, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[150px]" />
        <div className="absolute left-0 bottom-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Immersive Gallery Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Immersion visuelle
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            {"Plongez dans l'expérience"}
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              JOJ Sénégal
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Découvrez des moments uniques capturés lors des événements, avec GameFlow comme compagnon digital.
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <div className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mockups Section */}
        <motion.div
          ref={mockupsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isMockupsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {"L'application"}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Une interface{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              premium
            </span>
          </h2>
        </motion.div>

        {/* Mockups Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {mockups.map((mockup, index) => (
            <motion.div
              key={mockup.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isMockupsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Phone Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-50" />
              
              {/* Phone Frame */}
              <div className="relative w-48 sm:w-56 overflow-hidden rounded-[2rem] border-4 border-foreground/10 bg-card shadow-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                <Image
                  src={mockup.src}
                  alt={mockup.alt}
                  width={224}
                  height={448}
                  className="w-full"
                />
              </div>
              
              {/* Label */}
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {mockup.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
