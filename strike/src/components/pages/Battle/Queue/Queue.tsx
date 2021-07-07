import { FC, ReactElement } from 'react'
import { UnitCell } from '../../../common/UnitCell/UnitCell'
import { v4 as uuidv4 } from 'uuid'
import './Queue.css'
import { QueueType } from '../../../../helpers/helpers'
import { Props } from './Queue.d'

export const Queue: FC<Props> = ({
  queue,
  focusTools,
  focusedHero,
  hero,
  team1,
  team2,
}): ReactElement => {
  return (
    <div className="queue">
      <div className="queue__wrapper">
        {queue &&
          queue.map((unit: QueueType) => (
            <div
              className="queue__unit"
              key={uuidv4()}
              // tslint:disable-next-line: jsx-no-lambda
              onMouseEnter={() => {
                focusTools.setFocus(unit)
                let unitHitMatrix
                if (unit.team === 1) {
                  unitHitMatrix = unit.getHitMatrix(team1, team2)
                } else {
                  unitHitMatrix = unit.getHitMatrix(team2, team1)
                }
                focusTools.setMatrix({
                  hitMatrix: unitHitMatrix.hitMatrix,
                  team: unit.team,
                  isReverse: unitHitMatrix.isReverse,
                })
              }}
              // tslint:disable-next-line: jsx-no-lambda
              onMouseLeave={() => {
                focusTools.removeFocus()
                focusTools.removeMatrix()
              }}
            >
              <UnitCell
                unit={unit}
                isHero={hero === unit}
                focusedClass={focusedHero === unit ? 'hero__focused' : ''}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
