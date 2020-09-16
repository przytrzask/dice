/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import "./App.css"
import { Flex, ThemeProvider } from "theme-ui"

import { History as HistoryComponent } from "./components/History"
import { Game } from "./components/Game/Game"

import theme from "./theme"
import { useStore, ROUNDS } from "./hooks/store/useStore"
import { History, State } from "./hooks/store/types"

const calculateScore = (state: State) =>
  state.history.reduce(
    // @ts-ignore
    (acc, { points }) => (parseFloat(acc) + parseFloat(points)).toFixed(2),
    0
  )

function App() {
  const score = useStore(React.useCallback(calculateScore, []))
  const round = useStore((store) => store.round)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main sx={styles.main}>
          <Flex sx={styles.history} bg="primary">
            <HistoryComponent />
          </Flex>
          <Flex
            // @todo fixme problem with flexDirection type
            style={{ flexDirection: "column" }}
            p={4}
            sx={styles.game}
            bg="muted"
          >
            <header sx={styles.header}>
              <h1 sx={styles.h1}>
                Score: <output>{score}</output>
              </h1>
              <h2 sx={styles.h2}>
                Round:
                {round}/{ROUNDS}
              </h2>
            </header>
            <Game />
          </Flex>
        </main>
      </div>
    </ThemeProvider>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  history: {
    p: 4,
    borderRadius: 30,
    overflow: "auto",
    justifyContent: "center",
  },

  game: {
    p: 4,
  },
  main: {
    bg: "muted",
    borderRadius: 30,
    overflow: "hidden",
    display: "grid",
    width: 1024,
    gridTemplateColumns: "324px 700px",
    height: 542,
    boxShadow:
      "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(0, 0, 0, 0.15)",
  },
  h1: { color: "primary" },
  h2: { color: "secondary" },
}

export default App
