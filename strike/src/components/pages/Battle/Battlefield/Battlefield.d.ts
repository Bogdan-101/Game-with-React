import { Unit } from "../../../../types/Unit";

export type Props = {
  team1: Unit[][]
  team2: Unit[][]
  focusTools: {
    setFocus: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeFocus: () => {}
  }
  focusedHero: Unit
  hitMatrix: {
    hitMatrix: boolean[][]
    team: number
    isReverse: boolean
  }
  hero: Unit
  nextStep: () => void
}