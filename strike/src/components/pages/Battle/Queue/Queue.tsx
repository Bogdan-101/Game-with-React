import React, { FC, ReactElement } from 'react'
import { Unit } from '../../../../types/Unit'
import { UnitCell } from '../../../common/UnitCell/UnitCell'
import { v4 as uuidv4 } from 'uuid'
import './Queue.css'
import { QueueType } from '../../../../helpers/helpers'

type Props = {
  queue: QueueType[]
  focusTools: {
    setFocus: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeFocus: () => {}
    setMatrix: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeMatrix(): void
  }
  focusedHero: Unit
  hero: Unit
  team1: Unit[][]
  team2: Unit[][]
}

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
                const unitHitMatrix = unit.getHitMatrix(team1, team2)
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
