import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { ExperienceSection } from "@/components/experience-section"
import { WhySection } from "@/components/why-section"
import { DownloadSection } from "@/components/download-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <ExperienceSection />
      <WhySection />
      <DownloadSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
