"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Apple, Smartphone } from "lucide-react"

export function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                Téléchargez{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GameFlow
                </span>
              </h2>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground text-pretty">
                Vivez les JOJ autrement. Disponible gratuitement sur iOS et Android.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-90"
                >
                  <Apple className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Télécharger sur</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-90"
                >
                  <Smartphone className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponible sur</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Gratuit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mode hors ligne</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mise à jour auto</span>
                </div>
              </div>
            </div>

            {/* QR Code & Phone Preview */}
            <div className="flex flex-col items-center gap-8">
              {/* QR Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-card/80 p-4 shadow-lg ring-1 ring-border/60 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                >
                  <Image
                    src="/qrcode.png"
                    alt="QR Code GameFlow"
                    width={210}
                    height={210}
                    className="h-[150px] w-[150px] rounded-xl object-contain sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]"
                  />
                </motion.div>
              </motion.div>
              <p className="text-center text-sm font-medium text-muted-foreground">Scannez pour voir le site</p>

              {/* Floating Phone Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary to-secondary opacity-40 blur-2xl" />
                <div className="relative w-36 overflow-hidden rounded-[1.5rem] border-4 border-foreground/10 shadow-2xl">
                  <Image
                    src="/images/mockup-home.jpg"
                    alt="GameFlow Preview"
                    width={144}
                    height={288}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
