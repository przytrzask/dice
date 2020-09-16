import create, { StateCreator } from "zustand"
import { LOCALSTORAGE_KEY } from "../../constants"
import { State, Bet } from "./types"

export const ROUNDS = 30

const saveToLocalstorage = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => void) => void>
): StateCreator<T> => (set, get, api) =>
  config(
    (args) => {
      set(args as (state: T) => T)
      try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(get()))
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. JSON.parse and JSON.stringify
        // can throw, too.
      }
    },
    get,
    api
  )

export const useStore = create<State>(
  saveToLocalstorage((set) => ({
    bet: null,
    gameStatus: "start",
    history: [],
    round: 0,
    drawn: null,
    setDrawn: (drawn) =>
      set((state) => {
        if (state.gameStatus !== "drawing" && state.gameStatus !== "start")
          throw new Error(
            "bet status can be transited only from status drawing"
          )
        return {
          drawn,
          gameStatus: "bet",
          ...(state.round && {
            history: [
              ...state.history,
              {
                previous: state.drawn,
                drawn,
                bet: state.bet,
                points: calculatePoints(state.drawn!, drawn, state.bet),
              },
            ],
          }),
        }
      }),
    setBet: (bet: Bet) =>
      set((state) => ({ bet, round: state.round += 1, gameStatus: "drawing" })),
    setError: () => set((state) => ({ ...state, gameStatus: "error" })),
    setDrawing: () => set((state) => ({ ...state, gameStatus: "drawing" })),
    setContinue: (state: State) => set(() => state),
  }))
)

const calculatePoints = (prev: number, next: number, bet: Bet) => {
  // @todo lack of business requirements when same number is drawn
  if (prev === next) return 0
  if (bet === "less") {
    return prev > next ? 0.1 : 0
  } else {
    return prev < next ? 0.1 : 0
  }
}

export const isGameOver = (state: State) => state.round === ROUNDS

export const canContinue = (state: State | null): state is State => {
  console.log(state?.gameStatus)
  if (
    state &&
    state.history &&
    state.history.length > 0 &&
    !isGameOver(state)
  ) {
    return true
  }
  return false
}
