/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import { Dice } from "./Dice"
import { useInterval } from "../../hooks/useInterval"

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export function Drawing() {
  const [count, setCount] = React.useState(getRandomInt(1, 6))
  useInterval(() => {
    setCount(getRandomInt(1, 6))
  }, 100)
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
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            loop: Infinity,
          }}
        >
          <Dice value={count} />
        </motion.div>
      </main>
      <footer
        sx={{
          width: "100%",
          height: 90,
        }}
      ></footer>
    </React.Fragment>
  )
}
