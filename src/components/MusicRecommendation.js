"use client"
import { motion } from "framer-motion"
import { useTheme } from "./MoodThemeProvider"
import "./MusicRecommendation.css"

// Spotify playlist links for each mood
const moodPlaylists = {
  happy: "https://open.spotify.com/",
  calm: "https://open.spotify.com/",
  energetic: "https://open.spotify.com/",
  melancholy: "https://open.spotify.com/",
  creative: "https://open.spotify.com/",
}

// Playlist names for display
const playlistNames = {
  happy: "Masti Bhari Duniya",
  calm: "Sukoon Bhari Shaam",
  energetic: "Josh Mein Aaja",
  melancholy: "Tanhaiyon Ka Safar",
  creative: "Soch Ki Udaan",
}

function MusicRecommendation() {
  const { mood } = useTheme()

  const playlistUrl = moodPlaylists[mood]
  const playlistName = playlistNames[mood]

  return (
    <motion.div
      className="music-recommendation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3>Music for your mood</h3>
      <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="spotify-link">
        <span className="spotify-icon">♫</span>
        {playlistName} vibe on Spotify
      </a>
    </motion.div>
  )
}

export default MusicRecommendation