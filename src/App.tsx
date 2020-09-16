/** @jsx jsx */
import { jsx } from "theme-ui"
import "./App.css"
import { Flex, ThemeProvider } from "theme-ui"

import { History } from "./components/History"
import { Game } from "./components/Game/Game"

import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main sx={styles.main}>
          <Flex sx={styles.history} bg="primary">
            <History />
          </Flex>
          <Flex
            // @todo add comment
            style={{ flexDirection: "column" }}
            p={4}
            sx={styles.game}
            bg="muted"
          >
            <header
              sx={{
                width: "100%",
              }}
            >
              Header stats
            </header>
            <Game />
          </Flex>
        </main>
      </div>
    </ThemeProvider>
  )
}

const styles = {
  header: { flexDirection: "column", display: "flex" },
  history: { p: 4 },

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
}

export default App
