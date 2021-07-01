import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'
import * as helpers from '../../../helpers/helpers'

export class Melee implements IActionBehavior {
  public damage: number

  constructor(damage: number) {
    this.damage = damage
  }

  public performAction(target: Unit): void {
    target.takeDamage(this.damage)
  }

  public getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][] {
    if (!helpers.isFirstLineDead(friends) && coords[0] === 1) {
      return Array(2).fill(Array(3).fill(false))
    }

    if (helpers.isFirstLineDead(friends) && coords[0] === 0) {
      return Array(2).fill(Array(3).fill(false))
    }

    let rowInd = 0
    if (helpers.isFirstLineDead(foes)) {
      rowInd = 1
    }

    const result: boolean[][] = [
      [false, false, false],
      [false, false, false],
    ]
    for (let i = -1; i < 2; i++) {
      if (
        typeof foes[rowInd][coords[1] + i] !== 'undefined' &&
        foes[rowInd][coords[1] + i].health > 0
      ) {
        result[rowInd][coords[1] + i] = true
      }
    }

    return result
  }
}
