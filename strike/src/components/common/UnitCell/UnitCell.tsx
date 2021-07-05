import React, { FC, ReactElement } from 'react'
import { QueueType } from '../../../helpers/helpers'
import { Unit } from '../../../types/Unit'
import './UnitCell.css'

type Props = {
  unit: QueueType
  isHero: boolean
}

export const UnitCell: FC<Props> = ({ unit, isHero }): ReactElement => {
  const teamClass = typeof unit.team !== 'undefined' ? (unit.team === 1 ? 'team1' : 'team2') : ''
  const heroClass = isHero ? 'hero' : ''

  return (
    <div className={`cell ${teamClass} ${heroClass}`}>
      <div className="cell__wrapper">
        <div className="cell__name">{unit.name}</div>
        <div className="cell_health">
          {unit.health} / {unit.totalHealth}
        </div>
      </div>
    </div>
  )
}
