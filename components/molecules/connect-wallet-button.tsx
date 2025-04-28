"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"
import { Button } from "@/components/atoms/button"

export default function ConnectWalletButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleConnect = () => {
    // This would trigger the SIWE flow in a real implementation
    alert("This would connect to MetaMask or WalletConnect and redirect to /dashboard")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="wallet"
        size="xl"
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleConnect}
      >
        <Wallet className="mr-2 h-5 w-5" />
        Connect Wallet
        {/* Micro-interaction effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </Button>
    </motion.div>
  )
}
