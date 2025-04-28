"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/atoms/button"
import AssetCard from "@/components/molecules/asset-card"
import { useFeaturedAssets } from "@/hooks/use-featured-assets"

export default function FeaturedAssetsSection() {
  const { assets, isLoading } = useFeaturedAssets()
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Assets</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of AI-priced tokenized assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-lg overflow-hidden shadow-lg border border-border h-72 animate-pulse"
              >
                <div className="h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-muted/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Assets</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of AI-priced tokenized assets.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <Button variant="secondary" size="icon" onClick={handleScrollLeft} className="rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <Button variant="secondary" size="icon" onClick={handleScrollRight} className="rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel */}
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ opacity }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-6">
              {assets.map((asset, index) => (
                <div key={asset.id} className="min-w-[280px] snap-start">
                  <AssetCard asset={asset} index={index} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
