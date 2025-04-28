"use client"

import { motion } from "framer-motion"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

interface PriceChartPreviewProps {
  data: { time: string; price: number }[]
  className?: string
  color?: string
}

export default function PriceChartPreview({ data, className, color = "#3b82f6" }: PriceChartPreviewProps) {
  return (
    <motion.div
      className={cn("h-24 w-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "none",
              borderRadius: "4px",
              fontSize: "12px",
            }}
            itemStyle={{ color: "#fff" }}
            formatter={(value: number) => [`${value.toFixed(4)} ETH`, "Price"]}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
