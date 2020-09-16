/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

import { canContinue, useStore } from "../../hooks/store/useStore"
import { State } from "../../hooks/store/types"
import { useRollTheDice } from "../../hooks/useRollTheDice"
import { LOCALSTORAGE_KEY } from "../../constants"

export function Start() {
  const { setContinue } = useStore()

  const [state] = React.useState<State | null>(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "null")
    } catch {}
  })

  const rollTheDice = useRollTheDice()

  return (
    <React.Fragment>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      ></main>

      <footer
        sx={{
          width: "100%",
          height: 90,
        }}
      >
        {canContinue(state) && (
          <button
            sx={{ variant: "button.secondary", mt: "auto" }}
            onClick={() => setContinue(state)}
          >
            Continue game
          </button>
        )}
        <button
          sx={{ variant: "button.primary", ml: 2, mt: "auto" }}
          onClick={rollTheDice}
        >
          New Game
        </button>
      </footer>
    </React.Fragment>
  )
}
