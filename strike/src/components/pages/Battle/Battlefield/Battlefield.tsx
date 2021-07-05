import React, { useEffect, useState, FC, ReactElement } from 'react'
import { Unit } from '../../../../types/Unit'
import { UnitCell } from '../../../common/UnitCell'
import { v4 as uuidv4 } from 'uuid'
import { isEqual } from 'lodash'
import './Battlefield.css'

type Props = {
  team1: Unit[][]
  team2: Unit[][]
  focusTools: {
    setFocus: React.Dispatch<React.SetStateAction<Unit | {}>>
    removeFocus: () => {}
  }
  hero: Unit
  hitMatrix: {
    hitMatrix: boolean[][]
    team: number
    isReverse: boolean
  }
}

export const Battlefield: FC<Props> = ({
  team1,
  team2,
  focusTools,
  hero,
  hitMatrix,
}): ReactElement => {
  function getRows(team: Unit[][], teamNumber: number): ReactElement {
    return (
      <div className={`field__team field__team${teamNumber}`}>
        {team.map((row: Unit[], rowInd: number) => (
          <div className="field__teamRow" key={uuidv4()}>
            {row.map((unit: Unit, colInd: number) => {
              let hitClass =
                hitMatrix.hitMatrix[rowInd][colInd] === true && hitMatrix.team !== teamNumber
                  ? 'hit'
                  : ''
              if (hitMatrix.isReverse) {
                if (hitClass === 'hit') {
                  hitClass = ''
                } else {
                  hitClass = 'hit'
                }
              }
              return (
                <div
                  className={`field__hoveredDiv ${hitClass}`}
                  key={uuidv4()}
                  // tslint:disable-next-line: jsx-no-lambda
                  onMouseEnter={() => {
                    focusTools.setFocus(unit)
                  }}
                  // tslint:disable-next-line: jsx-no-lambda
                  onMouseLeave={() => {
                    focusTools.removeFocus()
                  }}
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => {
                    if (hitClass === '') {
                      return
                    }
                    console.log('hit')
                    if (hitMatrix.team === 1) {
                      hero.performAction(team2, unit)
                    } else {
                      hero.performAction(team1, unit)
                    }
                    console.log(team1, team2)
                  }}
                >
                  <UnitCell unit={unit} isHero={hero === unit} />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  if (typeof hero === 'undefined') return <div />

  return (
    <div className="field">
      <div className="field__team team1">{getRows(team1, 1)}</div>
      <div className="field__team team2">{getRows(team2, 2)}</div>
    </div>
  )
}
