import React, { useState, useEffect, useRef } from 'react'
import { Battlefield } from './Battlefield'
import { Queue } from './Queue'
import { UnitInfo } from './UnitInfo'
import * as helpers from '../../../helpers/helpers'
import './Battle.css'
import { Unit } from '../../../types/Unit'

export const Battle: React.FC = () => {
  const team1 = useRef(helpers.generateUnitsMatrix())
  const team2 = useRef(helpers.generateUnitsMatrix())
  const [focusUnit, setFocusUnit] = useState<Unit | undefined>()
  const [hitMatrix, setHitMatrix] = useState<{
    hitMatrix: boolean[][]
    team: number
    isReverse: boolean
  }>({
    hitMatrix: [[]],
    team: 0,
    isReverse: false,
  })
  const [queue, setQueue] = useState(helpers.generateInitiativeQueue(team1.current, team2.current))
  const [round, setRound] = useState(1)
  const [step, setStep] = useState(0)

  useEffect(() => {
    resetMatrix()
    queue[step].removeArmor()
    if (queue[step].isStunned) {
      queue[step].removeParalyze()
      nextStep()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, round, queue])

  useEffect(() => {
    const queueArray = helpers.generateInitiativeQueue(team1.current, team2.current)
    setQueue(helpers.getValidQueue(queueArray))
    setFocusUnit(queueArray[step])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round])

  function nextStep() {
    setQueue(helpers.getValidQueue(queue))
    resetMatrix()
    if (step + 1 >= queue.length) {
      setRound((round) => round + 1)
      setStep(0)
    } else {
      setStep((step) => step + 1)
    }
  }

  function resetMatrix() {
    if (typeof queue[step].team === 'undefined') {
      return
    }
    let unitHitMatrix;
    if (queue[step].team === 1) {
      unitHitMatrix = queue[step]!.getHitMatrix(team1.current, team2.current)
    } else {
      unitHitMatrix = queue[step]!.getHitMatrix(team2.current, team1.current)
    }
    setHitMatrix({
      hitMatrix: unitHitMatrix.hitMatrix,
      isReverse: unitHitMatrix.isReverse,
      // @ts-ignore
      team: queue[step].team,
    })
  }

  function removeFocusUnit() {
    setFocusUnit(queue[step])
  }

  return (
    <div className="battle">
      <div className="battle_wrapper">
        <Battlefield
          team1={team1.current}
          team2={team2.current}
          focusTools={{ setFocus: setFocusUnit, removeFocus: removeFocusUnit }}
          focusedHero={focusUnit}
          hitMatrix={hitMatrix}
          hero={queue[step]}
          nextStep={nextStep}
        />
        <Queue
          queue={queue}
          focusedHero={focusUnit}
          hero={queue[step]}
          team1={team1.current}
          team2={team2.current}
          focusTools={{
            setFocus: setFocusUnit,
            removeFocus: removeFocusUnit,
            setMatrix: setHitMatrix,
            removeMatrix: resetMatrix,
          }}
        />
        <UnitInfo unit={focusUnit} />
      </div>
    </div>
  )
}
