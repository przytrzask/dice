/** @jsx jsx */
import { jsx } from "theme-ui"

import { useStore } from "../../hooks/store/useStore"
import { assertUnreachable } from "../../hooks/assertUnreachable"
import { Start } from "./Start"
import { Drawing } from "./Drawing"
import { BetComponent } from "./Bet"

export function Game() {
  const state = useStore()

  switch (state.gameStatus) {
    case "start":
      return <Start />
    case "drawing":
      return <Drawing />
    case "bet":
      return <BetComponent value={state.drawn} />
    case "error":
      return <Error />

    default:
      assertUnreachable(state)
  }
}

function Error() {
  return <button onClick={() => {}}>Try Again</button>
}
