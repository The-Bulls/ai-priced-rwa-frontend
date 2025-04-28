export interface Asset {
  id: string
  name: string
  imageUrl: string
  price: number
  priceChange: number
  aiConfidence: number
  chartData?: { time: string; price: number }[]
}
