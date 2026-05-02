"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CircleHelp, ShieldCheck, Smartphone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qu’est-ce que GameFlow ?",
    answer: "GameFlow est une plateforme digitale conçue pour améliorer l’expérience des JOJ au Sénégal.",
  },
  {
    question: "L’application est-elle gratuite ?",
    answer: "Oui, GameFlow est accessible gratuitement pour tous les utilisateurs.",
  },
  {
    question: "Peut-on utiliser l’application sans internet ?",
    answer: "Oui, certaines fonctionnalités restent disponibles en mode offline.",
  },
  {
    question: "Comment acheter des billets ?",
    answer: "L’achat se fait directement dans l’application via le paiement mobile intégré (Wave, Orange Money).",
  },
  {
    question: "Comment fonctionne la Smart Map ?",
    answer: "La Smart Map guide les utilisateurs en temps réel vers les lieux, activités et services utiles.",
  },
  {
    question: "L’application est-elle sécurisée ?",
    answer: "Oui, GameFlow intègre un système SOS et des mécanismes de protection des données.",
  },
  {
    question: "Quelles langues sont disponibles ?",
    answer: "L’application est disponible en Français, en Anglais et en Wolof.",
  },
]

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <CircleHelp className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Questions{" "}
            <span className="bg-gradient-to-r from-[#0c80c3] to-[#09a552] bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty">
            Tout ce qu’il faut savoir pour profiter pleinement de l’expérience GameFlow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl glass p-4 sm:p-6"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 px-4 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(12,128,195,0.25)]"
              >
                <AccordionTrigger className="text-base text-foreground hover:no-underline">
                  <span className="flex items-center gap-2">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="h-4 w-4 text-[#0c80c3]" />
                    ) : (
                      <Smartphone className="h-4 w-4 text-[#09a552]" />
                    )}
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
