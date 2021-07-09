import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Battlefield } from './Battlefield'
import { Queue } from './Queue'
import { UnitInfo } from './UnitInfo'
import * as helpers from '../../../helpers/helpers'
import './Battle.css'
import * as types from './Battle.d'
import * as unitTypes from '../../../types/Unit.d'

export const Battle: React.FC = () => {
  const team1 = useRef(helpers.generateUnitsMatrix())
  const team2 = useRef(helpers.generateUnitsMatrix())
  const [focusUnit, setFocusUnit] = useState<types.focusUnitType>()
  const [hitMatrix, setHitMatrix] = useState<types.hitMatrixType>({
    hitMatrix: [[]],
    team: 0,
    isReverse: false,
  })
  const [queue, setQueue] = useState<helpers.QueueType[]>(
    helpers.generateInitiativeQueue(team1.current, team2.current)
  )
  const [round, setRound] = useState<number>(1)
  const [step, setStep] = useState<number>(0)
  const isWin = useRef(false)

  useEffect(() => {
    resetMatrix()
    if (typeof queue[step] === 'undefined') {
      return
    }
    queue[step].removeArmor()
    if (queue[step].isStunned) {
      queue[step].removeParalyze()
      nextStep()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, round, queue])

  useEffect(() => {
    const queueArray: helpers.QueueType[] = helpers.generateInitiativeQueue(
      team1.current,
      team2.current
    )
    setQueue(helpers.getValidQueue(queueArray))
    setFocusUnit(queueArray[step])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round])

  const checkForWin = useCallback(
    (checkedQueue: helpers.QueueType[]): void => {
      let isBlueLeft: boolean = false
      let isRightLeft: boolean = false
      checkedQueue.forEach((unit: helpers.QueueType) => {
        if (unit.team === 1 && unit.health > 0) {
          isBlueLeft = true
        } else {
          if (unit.team === 2 && unit.health > 0) {
            isRightLeft = true
          }
        }
      })
      console.log(isBlueLeft, isRightLeft, queue)
      if (!isRightLeft || !isBlueLeft) {
        if (!isRightLeft && isBlueLeft) {
          alert('Blue team won!')
        }
        if (!isBlueLeft && isRightLeft) {
          alert('Red team won!')
        }
        isWin.current = true
      }
    },
    [queue]
  )

  useEffect(() => {
    if (!isWin.current) {
      checkForWin(queue)
    }
  }, [checkForWin, isWin, queue, step])

  function nextStep() {
    setQueue(helpers.getValidQueue(queue))
    resetMatrix()
    if (step + 1 >= queue.length) {
      setRound((prevRound) => prevRound + 1)
      setStep(0)
    } else {
      setStep((prevStep) => prevStep + 1)
    }
  }

  function resetMatrix() {
    if (typeof queue[step] === 'undefined') {
      return
    }
    if (typeof queue[step].team === 'undefined') {
      return
    }
    let unitHitMatrix: unitTypes.unitHitMatrixType
    if (queue[step].team === 1) {
      unitHitMatrix = queue[step]!.getHitMatrix(team1.current, team2.current)
    } else {
      unitHitMatrix = queue[step]!.getHitMatrix(team2.current, team1.current)
    }
    setHitMatrix({
      hitMatrix: unitHitMatrix.hitMatrix,
      isReverse: unitHitMatrix.isReverse,
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
