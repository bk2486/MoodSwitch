import { MoodThemeProvider } from "./components/MoodThemeProvider"
import MoodSwitcher from "./components/MoodSwitcher"
import "./App.css"

function App() {
  return (
    <MoodThemeProvider>
      <div className="app-container">
        <main>
          <h1>Mood Themes</h1>
          <p className="subtitle">Select a mood to transform the interface</p>
          <MoodSwitcher />
        </main>
      </div>
    </MoodThemeProvider>
  )
}

export default App