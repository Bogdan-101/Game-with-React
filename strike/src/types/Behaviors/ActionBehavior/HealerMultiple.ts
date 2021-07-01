import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class HealerMultiple implements IActionBehavior {
  public healAmount: number

  constructor(healAmount: number) {
    this.healAmount = healAmount
  }

  public performAction(targets: Unit[]): void {
    targets.forEach((friend: Unit) => {
      friend.heal(this.healAmount)
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
