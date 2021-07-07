import React, { FC, ReactElement } from 'react'
import './UnitCell.css'
import { Props } from './UnitCell.d'

export const UnitCell: FC<Props> = ({ unit, isHero, focusedClass }): ReactElement => {
  const teamClass = typeof unit.team !== 'undefined' ? (unit.team === 1 ? 'team1' : 'team2') : ''
  const heroClass = isHero ? 'hero' : ''

  return (
    <div className={`cell ${teamClass} ${heroClass} ${focusedClass}`}>
      <div className="cell__wrapper">
        <div className="cell__name">{unit.name}</div>
        <div className="cell_health">
          {unit.health} / {unit.totalHealth}
          <br />
          armor: {unit.armor}
          <br />
          {unit.isStunned && '*Stunned*'}
        </div>
      </div>
    </div>
  )
}
