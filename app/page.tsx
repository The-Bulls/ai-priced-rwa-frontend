import PublicLayout from "@/components/templates/public-layout"
import HeroSection from "@/components/organisms/hero-section"
import FeaturesSection from "@/components/organisms/features-section"
import HowItWorksSection from "@/components/organisms/how-it-works-section"
import FeaturedAssetsSection from "@/components/organisms/featured-assets-section"
import FooterSection from "@/components/organisms/footer-section"

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FeaturedAssetsSection />
      <FooterSection />
    </PublicLayout>
  )
}
