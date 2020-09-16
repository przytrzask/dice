import React from "react"

type Props = {
  callback: () => void
}

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = React.useRef<() => void>()

  React.useEffect(() => {
    savedCallback.current = callback
  })

  React.useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
