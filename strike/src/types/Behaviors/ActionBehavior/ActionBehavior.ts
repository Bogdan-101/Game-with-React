import { Unit } from './../../Unit'

export interface IActionBehavior {
  power?: number
  classType: string
  performAction(targets: Unit | Unit[][]): void
}
