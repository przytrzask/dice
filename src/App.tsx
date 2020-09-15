import React from "react"
import "./App.css"
// import { useStore } from "./hooks/store/useStore"

import { History } from "./components/History"
import { Game } from "./components/Game/Game"

function App() {
  // const { gameStatus } = useStore()

  return (
    <div className="App">
      <History />
      <Game />
    </div>
  )
}

export default App
