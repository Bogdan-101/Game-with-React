import { Unit } from "../../../types/Unit"

export type hitMatrixType = {
  hitMatrix: boolean[][]
  team: number
  isReverse: boolean
}

export type focusUnitType = Unit | undefined