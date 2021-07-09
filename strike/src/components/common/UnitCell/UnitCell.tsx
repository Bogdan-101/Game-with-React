import React, { FC, ReactElement } from 'react'
import './UnitCell.css'
import ShieldIcon from '../../../assets/images/shield.svg'
import { Props } from './UnitCell.d'

export const UnitCell: FC<Props> = ({ unit, isHero, focusedClass }): ReactElement => {
  const teamClass = typeof unit.team !== 'undefined' ? (unit.team === 1 ? 'team1' : 'team2') : ''
  const heroClass = isHero ? 'hero' : 'notHero'
  const stunClass = unit.isStunned ? 'stun' : ''
  const lowHpClass = unit.health / unit.totalHealth <= 0.25 ? 'lowHp' : ''

  const image = require('../../../assets/images/' + unit.name + '.jpg').default

  return (
    <div className={`cell ${teamClass} ${heroClass} ${focusedClass} ${stunClass}`}>
      <div className="cell__wrapper">
        <img src={image} alt="hero" className="cell__image" />
        {unit.armor > 0 && <img className="cell__shield" src={ShieldIcon} alt="shield" />}
        <div className="cell__info">
          <span className={`${lowHpClass}`} />
          <span className="cell__healthBar">
            <span
              className="cell__healthRed"
              style={{ width: `${(unit.health / unit.totalHealth) * 100}%` }}
            />
            <span className="cell__healthBarNumbers">
              {unit.health} / {unit.totalHealth}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
