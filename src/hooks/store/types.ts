export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6
export type Bet = "less" | "more" | null

export type History = {
  drawn: DiceValue
  bet: Bet
  points: 0 | 0.1
}

export type State =
  | {
      gameStatus: "start"
      bet: null
      history: History[]
      points: number
      round: number
      drawn: null
      setDrawn: (dice: DiceValue) => void
      setBet: (bet: Bet) => void
      setError: () => void
      setDrawing: () => void
      setContinue: (state: State) => void
    }
  | {
      gameStatus: "drawing"
      bet: Bet | null
      history: History[]
      points: number
      round: number
      drawn: DiceValue | null
      setDrawn: (dice: DiceValue) => void
      setBet: (bet: Bet) => void
      setError: () => void
      setDrawing: () => void
      setContinue: (state: State) => void
    }
  | {
      gameStatus: "error"
      bet: Bet | null
      history: History[]
      points: number
      round: number
      drawn: DiceValue | null
      setDrawn: (dice: DiceValue) => void
      setBet: (bet: Bet) => void
      setError: () => void
      setDrawing: () => void
      setContinue: (state: State) => void
    }
  | {
      bet: Bet
      gameStatus: "bet"
      history: History[]
      points: number
      round: number
      drawn: DiceValue
      setDrawn: (dice: DiceValue) => void
      setBet: (bet: Bet) => void
      setError: () => void
      setDrawing: () => void
      setContinue: (state: State) => void
    }
