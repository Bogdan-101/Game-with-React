import React, { FC, ReactElement } from 'react'
import { Unit } from '../../../../types/Unit'
import { UnitCell } from '../../../common/UnitCell'
import { v4 as uuidv4 } from 'uuid'
import './Battlefield.css'
import { Props } from './Battlefield.d'

export const Battlefield: FC<Props> = ({
  team1,
  team2,
  focusTools,
  focusedHero,
  hitMatrix,
  hero,
  nextStep,
}): ReactElement => {
  function getRows(team: Unit[][], teamNumber: number): ReactElement {
    return (
      <div className={`field__team field__team${teamNumber}`}>
        {team.map((row: Unit[], rowInd: number) => (
          <div className="field__teamRow" key={uuidv4()}>
            {row.map((unit: Unit, colInd: number) => {
              let isNeededTeam = hitMatrix.team !== teamNumber
              if (hitMatrix.isReverse) {
                isNeededTeam = !isNeededTeam
              }
              const hitClass = hitMatrix.hitMatrix[rowInd][colInd] && isNeededTeam ? 'hit' : ''
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
                    let teams: {
                      friends: Unit[][]
                      foes: Unit[][]
                      isReverse: boolean
                    }
                    if (teamNumber === 2) {
                      teams = hero.targetTeamBehavior.chooseTargetTeam(team1, team2)
                    } else {
                      teams = hero.targetTeamBehavior.chooseTargetTeam(team2, team1)
                    }
                    if (teams.isReverse) {
                      teams.foes = teams.friends
                    }
                    hero.performAction(teams.foes, unit)
                    nextStep()
                  }}
                >
                  <UnitCell
                    unit={unit}
                    isHero={hero === unit}
                    focusedClass={focusedHero === unit ? 'hero__focused' : ''}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  if (typeof focusedHero === 'undefined') return <div />

  return (
    <div className="field">
      <div className="field__team team1">{getRows(team1, 1)}</div>
      <div className="field__team team2">{getRows(team2, 2)}</div>
      <button
        className="field__defend"
        // tslint:disable-next-line: jsx-no-lambda
        onClick={() => {
          hero.defend()
          nextStep()
        }}
      >
        Defend!
      </button>
    </div>
  )
}
