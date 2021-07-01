import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Paralyze implements IActionBehavior {
  public performAction(targets: Unit[]): void {
    targets.forEach((foe: Unit) => {
      foe.paralyze()
    })
  }

  public getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][] {
    const result: boolean[][] = []
    foes.forEach((row: Unit[], index: number) => {
      result.push([])
      row.forEach((foe: Unit, ind: number) => {
        if (foe.health > 0) {
          result[index].push(true)
        } else {
          result[index].push(true)
        }
      })
    })
    return result
  }
}
