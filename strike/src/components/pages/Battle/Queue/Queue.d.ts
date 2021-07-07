import { Unit } from "../../../../types/Unit";

export type Props = {
  queue: QueueType[]
  focusTools: {
    setFocus: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeFocus: () => {}
    setMatrix: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeMatrix(): void
  }
  focusedHero: Unit
  hero: Unit
  team1: Unit[][]
  team2: Unit[][]
}
