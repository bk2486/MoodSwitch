"use client"

import { createContext, useContext, useState, useEffect } from "react"

const themeSettings = {
  happy: {
    primary: "#ffb74d",         
    secondary: "#ffd54f",       
    text: "#5d4037",            
    background: "linear-gradient(135deg, #ffecb3, #ffd180)",  
  },
  calm: {
    primary: "#42a5f5",         
    secondary: "#a1d9f7",       
    text: "#2c3e50",           
    background: "linear-gradient(135deg, #d9f0fc, #a1d9f7)",  
  },
  energetic: {
    primary: "#ff6b00",         
    secondary: "#ffa94d",       
    text: "#2e2e2e",            
    background: "linear-gradient(135deg, #ffe5b4, #ff9f68)",  
  },
  melancholy: {
    primary: "#3b4656",         
    secondary: "#5a6b7d",       
    text: "#ffffff",            
    background: "linear-gradient(135deg, #232931, #3b4656)",  
  },
  creative: {
    primary: "#ba68c8",         
    secondary: "#e6c3eb",       
    text: "#4a148c",            
    background: "linear-gradient(135deg, #f5e1fc, #dab6f1)",  
  }
}

const MoodContext = createContext({
  mood: "calm",
  setMood: () => {},
  themeColors: themeSettings.calm,
})

export function MoodThemeProvider({ children }) {
  // Try to get saved mood from localStorage, default to "calm"
  const [mood, setMood] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMood = localStorage.getItem("selectedMood")
      return savedMood || "calm"
    }
    return "calm"
  })

  // Set theme colors directly from the predefined settings to avoid circular dependencies
  const themeColors = themeSettings[mood]

  // Save mood to localStorage and update CSS variables when mood changes
  useEffect(() => {
    localStorage.setItem("selectedMood", mood)

    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty("--primary-color", themeColors.primary)
    document.documentElement.style.setProperty("--secondary-color", themeColors.secondary)
    document.documentElement.style.setProperty("--text-color", themeColors.text)
    document.documentElement.style.setProperty("--background", themeColors.background)

    // Apply text color class to body
    if (mood === "melancholy") {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove("dark-theme")
    }
  }, [mood, themeColors])

  return <MoodContext.Provider value={{ mood, setMood, themeColors }}>{children}</MoodContext.Provider>
}

export const useTheme = () => useContext(MoodContext)