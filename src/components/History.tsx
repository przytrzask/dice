import React from "react"

import { useStore } from "../hooks/store/useStore"

export function History() {
  const { history } = useStore()

  return (
    <ul>
      {history.map((result, index) => {
        return (
          <li>
            Round:{index + 1} Result:{result.points}
          </li>
        )
      })}
    </ul>
  )
}
