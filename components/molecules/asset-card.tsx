"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/atoms/badge";
import type { Asset } from "@/lib/types";

interface AssetCardProps {
  asset: Asset;
  index: number;
}

export default function AssetCard({ asset, index }: AssetCardProps) {
  const confidenceVariant =
    asset.aiConfidence >= 80
      ? "high"
      : asset.aiConfidence >= 50
      ? "medium"
      : "low";

  return (
    <motion.div
      className="flex flex-col dv-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={asset.imageUrl || "/placeholder.svg?height=200&width=300"}
          alt={asset.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="ai" className="mb-1 block">
            DynamicVault
          </Badge>
          <Badge variant={confidenceVariant} className="block">
            {asset.aiConfidence}% Confidence
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{asset.name}</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-xl font-bold text-teal-accent">
              {asset.price} ETH
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">24h Change</p>
            <p
              className={`text-sm font-semibold ${
                asset.priceChange >= 0 ? "text-success-green" : "text-alert-red"
              }`}
            >
              {asset.priceChange >= 0 ? "+" : ""}
              {asset.priceChange}%
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
