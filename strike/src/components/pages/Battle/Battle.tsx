import React from 'react'
import { Battlefield } from './Battlefield'
import './Battle.css'

export const Battle: React.FC = () => {
  return (
    <div className="battle">
      <div className="battle_wrapper">
        <Battlefield />
      </div>
    </div>
  )
}
