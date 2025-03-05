"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./MoodThemeProvider"
import MusicRecommendation from "./MusicRecommendation"
import "./MoodSwitcher.css"

function MoodSwitcher() {
  const { mood, setMood } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMoodChange = (newMood) => {
    setIsAnimating(true)
    setTimeout(() => {
      setMood(newMood)
      setIsAnimating(false)
    }, 300)
  }

  const surpriseMood = () => {
    const moods = ["happy", "calm", "energetic", "melancholy", "creative"]
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    handleMoodChange(randomMood)
  }

  // Animation variants for different moods
  const containerVariants = {
    happy: {
      scale: [1, 1.02, 1],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    calm: {
      opacity: [0.9, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
    energetic: {
      scale: [0.98, 1.02, 0.99, 1],
      transition: { duration: 0.4 },
    },
    melancholy: {
      opacity: [0.9, 1],
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    creative: {
      rotate: [0, 1, -1, 0],
      transition: { duration: 0.8 },
    },
  }

  const moods = [
    { name: "happy", icon: "☀️", label: "Happy" },
    { name: "calm", icon: "☁️", label: "Calm" },
    { name: "energetic", icon: "⚡", label: "Energetic" },
    { name: "melancholy", icon: "🌧️", label: "Melancholy" },
    { name: "creative", icon: "🎨", label: "Creative" },
  ]

  return (
    <motion.div className="mood-container" variants={containerVariants} animate={mood}>
      <div className="mood-buttons">
        {moods.map((m) => (
          <motion.button
            key={m.name}
            onClick={() => handleMoodChange(m.name)}
            className={`mood-button ${mood === m.name ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mood-icon">{m.icon}</span> {m.label}
          </motion.button>
        ))}
      </div>

      <motion.button
        className="surprise-button"
        onClick={surpriseMood}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🎲 Surprise Me
      </motion.button>

      <MusicRecommendation />
    </motion.div>
  )
}

export default MoodSwitcher