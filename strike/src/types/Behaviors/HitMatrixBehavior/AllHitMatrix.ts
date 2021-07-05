import { Unit } from '../../Unit'
import { IHitMatrixBehavior } from './HitMatrixBehavior'

export class AllHitMatrix implements IHitMatrixBehavior {
  public getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][] {
    const result: boolean[][] = []
    foes.forEach((row: Unit[], index: number) => {
      result.push([])
      row.forEach((unit: Unit, ind: number) => {
        if (unit.health > 0) {
          result[index].push(true)
        } else {
          result[index].push(false)
        }
      })
    })
    return result
  }
}
