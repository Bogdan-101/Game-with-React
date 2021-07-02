import { Unit } from './../../Unit'

export interface IHitMatrixBehavior {
  getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][]
}
