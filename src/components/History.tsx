import React from "react"

import { useStore } from "../hooks/store/useStore"

export function History() {
  const { history } = useStore()

  return <div>{JSON.stringify(history, null, 2)}</div>
}
