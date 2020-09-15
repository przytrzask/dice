import React from "react"
import { useStore } from "./store/useStore"
import { DiceValue } from "./store/types"

type Data = {
  success: boolean
  // It will be always tuple of length 1
  dice: [{ value: DiceValue; type: "d6" }]
}

const diceEndpoint = "http://roll.diceapi.com/json/d6"

export function useRollTheDice() {
  const { setDrawn, setError, setDrawing } = useStore()
  const rollTheDice = React.useCallback(() => {
    setDrawing()
    fetch(diceEndpoint)
      .then(async (res) => {
        // @todo - Data from third party service should be validated first
        const { dice } = (await res.json()) as Data
        setDrawn(dice[0].value)
      })
      .catch(setError)
      .finally(() => {})
  }, [setDrawing, setDrawn, setError])

  return rollTheDice
}
