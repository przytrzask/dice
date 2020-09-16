/** @jsx jsx */
import { jsx } from "theme-ui"

// taken from https://codepen.io/LandonSchropp/pen/KpzzGo

type DiceProps = {
  value: number
}

const Pip = () => <span sx={styles.pip} />

type FaceProps = {
  children: React.ReactNode
}
const Face = ({ children }: FaceProps) => <div sx={styles.face}>{children}</div>

export const Dice = ({ value }: DiceProps) => {
  const pips = Array(value)
    .fill(0)
    .map((_, i) => <Pip key={i} />)
  return <Face>{pips}</Face>
}

const styles = {
  face: {
    display: "grid",
    gridTemplateAreas: "'a . c' 'e g f' 'd . b'",
    flex: "0 0 auto",
    margin: 16,
    padding: 10,
    width: 104,
    height: 104,

    background: "#e7e7e7",
    boxShadow:
      "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,inset -5px 0 #d7d7d7",
    borderRadius: "10%",
  },
  pip: {
    display: "block",
    alignSelf: "center",
    justifySelf: "center",
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#333",
    boxShadow: "inset 0 3px #111, inset 0 -3px #555",
    "&:nth-child(2)": {
      gridArea: "b",
    },
    "&:nth-child(3)": {
      gridArea: "c",
    },
    "&:nth-child(4)": {
      gridArea: "d",
    },
    "&:nth-child(5)": {
      gridArea: "e",
    },
    "&:nth-child(6)": {
      gridArea: "f",
    },
    /* This selects the last pip of odd-valued dice (1, 3, 5) and positions the pip in the center */
    "&:nth-child(odd):last-child": {
      gridArea: "g",
    },
  },
}
