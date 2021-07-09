import { Unit } from "../../../types/Unit"

export type hitMatrixType = {
  hitMatrix: boolean[][]
  team: number | undefined
  isReverse: boolean
}

export type focusUnitType = Unit | undefined