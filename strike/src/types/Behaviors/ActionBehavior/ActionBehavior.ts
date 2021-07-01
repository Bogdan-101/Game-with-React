import { Unit } from './../../Unit'

export interface IActionBehavior {
  damage?: number
  healAmount?: number
  performAction(targets: Unit | Unit[]): void
  getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][]
}
