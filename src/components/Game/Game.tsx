import React from "react"

import { canContinue, isGameOver, useStore } from "../../hooks/store/useStore"
import { Bet, State } from "../../hooks/store/types"
import { assertUnreachable } from "../../hooks/assertUnreachable"
import { useRollTheDice } from "../../hooks/useRollTheDice"
import { LOCALSTORAGE_KEY } from "../../constants"

export function Game() {
  const state = useStore()

  switch (state.gameStatus) {
    case "start":
      return <Start />
    case "drawing":
      return <Draw />
    case "bet":
      return <Beta value={state.drawn} />
    case "error":
      return <Error />

    default:
      assertUnreachable(state)
  }
}

function Start() {
  const { setContinue } = useStore()

  const [state] = React.useState<State | null>(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "null")
    } catch {}
  })

  const rollTheDice = useRollTheDice()

  return (
    <div>
      <button onClick={rollTheDice}>New Game</button>
      {canContinue(state) && (
        <button onClick={() => setContinue(state)}>Continue game</button>
      )}
    </div>
  )
}

function Draw() {
  return <div>Drawing...</div>
}

function Beta({ value }: DiceProps) {
  const state = useStore()
  const { setBet } = state
  const isOver = isGameOver(state)
  const rollTheDice = useRollTheDice()

  const bet = (bet: Bet) => {
    setBet(bet)
    rollTheDice()
  }

  return (
    <div>
      <Dice value={value} />
      {isOver ? (
        <GameOver />
      ) : (
        <React.Fragment>
          <button onClick={() => bet("less")}>Less</button>
          <button onClick={() => bet("more")}>More</button>
        </React.Fragment>
      )}
    </div>
  )
}

type DiceProps = {
  value: number
}
function Dice({ value }: DiceProps) {
  return <span>{value}</span>
}

function Error() {
  return <button onClick={() => {}}>Try Again</button>
}

function GameOver() {
  return <div>GameOver</div>
}
