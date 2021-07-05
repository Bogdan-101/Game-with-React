import React, { FC, ReactElement } from 'react'
import { IUnit } from '../../../../types/Unit.d'
import './UnitInfo.css'

type Props = {
  unit: IUnit
}

export const UnitInfo: FC<Props> = ({ unit }): ReactElement => {
  if (typeof unit === 'undefined') {
    return <div />
  }

  return (
    <div className="info">
      <div className="info__wrapper">
        {unit && (
          <ul>
            <li>Name: {unit.name}</li>
            <li>Health: {unit.health}</li>
            <li>Total health: {unit.totalHealth}</li>
            {unit.actionBehavior.power ? (
              <li className={`${unit.actionBehavior.classType}`}>
                power: {unit.actionBehavior.power} {unit.actionBehavior.classType}
              </li>
            ) : (
              <li className={`${unit.actionBehavior.classType}`}>
                {unit.actionBehavior.classType}
              </li>
            )}
            <li>Initiative: {unit.initiative}</li>
            <li>Base initiative: {unit.baseInitiative}</li>
            <li>Armor: {unit.armor}</li>
            <li>Is stunned: {String(unit.isStunned)}</li>
          </ul>
        )}
      </div>
    </div>
  )
}
