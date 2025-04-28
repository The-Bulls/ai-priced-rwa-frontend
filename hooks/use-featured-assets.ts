"use client"

import { useState, useEffect } from "react"
import type { Asset } from "@/lib/types"

// Mock data for featured assets
const mockAssets: Asset[] = [
  {
    id: "1",
    name: "Crypto Punk #3429",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 12.45,
    priceChange: 3.2,
    aiConfidence: 92,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 12 + Math.random() * 1.5,
    })),
  },
  {
    id: "2",
    name: "Bored Ape #8765",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 85.32,
    priceChange: -1.8,
    aiConfidence: 88,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 85 + Math.random() * 3,
    })),
  },
  {
    id: "3",
    name: "Azuki #4532",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 3.75,
    priceChange: 5.4,
    aiConfidence: 95,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 3.5 + Math.random() * 0.5,
    })),
  },
  {
    id: "4",
    name: "Moonbird #2187",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 6.21,
    priceChange: 2.1,
    aiConfidence: 90,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 6 + Math.random() * 0.8,
    })),
  },
  {
    id: "5",
    name: "Doodle #9876",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 2.45,
    priceChange: -0.8,
    aiConfidence: 78,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 2.4 + Math.random() * 0.3,
    })),
  },
  {
    id: "6",
    name: "CloneX #3344",
    imageUrl: "/placeholder.svg?height=200&width=300",
    price: 4.87,
    priceChange: 1.3,
    aiConfidence: 85,
    chartData: Array.from({ length: 20 }, (_, i) => ({
      time: `${i}h`,
      price: 4.8 + Math.random() * 0.4,
    })),
  },
]

export function useFeaturedAssets() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Simulate API call
    const fetchAssets = async () => {
      try {
        // In a real app, this would be a fetch call to your API
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setAssets(mockAssets)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
        setIsLoading(false)
      }
    }

    fetchAssets()
  }, [])

  return { assets, isLoading, error }
}
