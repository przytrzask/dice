/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

import { isGameOver, useStore } from "../../hooks/store/useStore"
import { Bet } from "../../hooks/store/types"
import { useRollTheDice } from "../../hooks/useRollTheDice"
import { Dice } from "./Dice"

type Props = {
  value: number
}

export function BetComponent({ value }: Props) {
  const state = useStore()
  const { setBet } = state
  const isOver = isGameOver(state)
  const rollTheDice = useRollTheDice()

  const bet = (bet: Bet) => {
    setBet(bet)
    rollTheDice()
  }

  return (
    <React.Fragment>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dice value={value} />
      </main>

      <footer
        sx={{
          width: "100%",
          height: 40,
        }}
      >
        <button
          sx={{ variant: "button.secondary", mt: "auto" }}
          onClick={() => bet("less")}
        >
          Less
        </button>
        <button
          sx={{ variant: "button.primary", mt: "auto", ml: 2 }}
          onClick={() => bet("more")}
        >
          More
        </button>
      </footer>
    </React.Fragment>
  )
}
