"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  produit: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Télécharger", href: "#download" },
    { label: "Tarifs", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  ressources: [
    { label: "Documentation", href: "#" },
    { label: "Tutoriels", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Confidentialité", href: "#" },
    { label: "Conditions", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="group mb-6 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logoGameflow.jpeg" alt="GameFlow Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Game<span className="text-primary">Flow</span>
              </span>
            </Link>

            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              {"L'application officielle des Jeux Olympiques de la Jeunesse au Sénégal. Vivez l'expérience autrement."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Produit
              </h3>
              <ul className="space-y-3">
                {footerLinks.produit.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Ressources
              </h3>
              <ul className="space-y-3">
                {footerLinks.ressources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Légal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Dakar, Sénégal
                  <br />
                  Village Olympique JOJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact@gameflow.sn"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  contact@gameflow.sn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+221123456789"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +221 12 345 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GameFlow. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Fait avec 💙 pour les JOJ Sénégal 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
