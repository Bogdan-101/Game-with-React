import { Unit } from '../../Unit'
import { IHitMatrixBehavior } from './HitMatrixBehavior'
import * as helpers from '../../../helpers/helpers'

export class MeleeHitMatrix implements IHitMatrixBehavior {
  public getHitMatrix(friends: Unit[][], foes: Unit[][], coords: number[]): boolean[][] {
    if (!helpers.isFirstLineDead(friends) && coords[0] === 1) {
      return Array(2).fill(Array(3).fill(false))
    }

    if (helpers.isFirstLineDead(friends) && coords[0] === 0) {
      return Array(2).fill(Array(3).fill(false))
    }

    let rowInd = 1
    if (helpers.isFirstLineDead(foes)) {
      rowInd = 0
    }
    let rowIndForSearch = 0
    if (helpers.isFirstLineDead(foes)) {
      rowIndForSearch = 1
    }

    const result: boolean[][] = [
      [false, false, false],
      [false, false, false],
    ]
    for (let i = -1; i < 2; i++) {
      if (
        typeof foes[rowIndForSearch][coords[1] + i] !== 'undefined' &&
        foes[rowIndForSearch][coords[1] + i].health > 0
      ) {
        result[rowInd][coords[1] + i] = true
      }
    }

    ;[
      { enemyCoords: 0, newEnemyCoords: 2 },
      { enemyCoords: 2, newEnemyCoords: 0 },
    ].forEach((elem) => {
      if (foes[rowIndForSearch][elem.enemyCoords].health === 0 && coords[1] === elem.enemyCoords) {
        if (foes[rowIndForSearch][elem.newEnemyCoords].health > 0)
          result[rowInd][elem.newEnemyCoords] = true
      }
    })

    return result.reverse()
  }
}
