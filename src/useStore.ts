import create from "zustand"

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6
type Bet = "less" | "more"

type GameStatus = "pending" | "over"
type History = {
  drawn: DiceValue
  bet: Bet
  point: 0 | 0.1
}

type State = {
  gameStatus: GameStatus
  history: History[]
  points: number
  round: number
  drawn: DiceValue | null
}

export const useStore = create<State>((set) => ({
  gameStatus: "pending",
  history: [],
  points: 0,
  round: 1,
  drawn: null,
}))
