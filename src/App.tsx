import React from "react"
import "./App.css"
import { useStore } from "./useStore"

import { History } from "./components/History"
import { GameOver } from "./components/GameOver"
import { Game } from "./components/Game"

function App() {
  const { gameStatus } = useStore()

  return (
    <div className="App">
      <History />
      {gameStatus === "pending" ? <Game /> : <GameOver />}
    </div>
  )
}

export default App
