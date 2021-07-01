import React, { useEffect, useState } from 'react'
import * as helpers from '../../../../helpers/helpers'
import './Battlefield.css'

export const Battlefield: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [team1, setTeam1] = useState(helpers.generateUnitsMatrix())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [team2, setTeam2] = useState(helpers.generateUnitsMatrix())

  useEffect(() => {
    console.log('team1: ', team1)
    console.log('team2: ', team2)
    team1.forEach((row) => {
      row.forEach((unit) => {
        console.log(unit.getHitMatrix(team1, team2), unit.name)
      })
    })
    console.log(helpers.generateInitiativeQueue(team1, team2))
  })

  return <div className="field" />
}
