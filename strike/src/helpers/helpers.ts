import { Unit } from '../types/Unit'
import { Archimage } from '../types/Heroes/Archimage'
import { Bandit } from '../types/Heroes/Bandit'
import { Bishop } from '../types/Heroes/Bishop'
import { Centaur } from '../types/Heroes/Centaur'
import { ElfArcher } from '../types/Heroes/ElfArcher'
import { Monk } from '../types/Heroes/Monk'
import { Sirena } from '../types/Heroes/Sirena'
import { Skeleton } from '../types/Heroes/Skeleton'
import { SkeletonMage } from '../types/Heroes/SkeletonMage'

export function getCoords(units: Unit[][], target: Unit): number[] {
  let coords: number[] = []
  units.forEach((row: Unit[], rowIndex) => {
    row.forEach((unit: Unit, colIndex) => {
      if (unit === target) {
        coords = [rowIndex, colIndex]
      }
    })
  })
  return coords
}

export function isFirstLineDead(units: Unit[][]): boolean {
  let isFirstLineDead = true
  units[0].forEach((unit: Unit) => {
    if (unit.health > 0) {
      isFirstLineDead = false
    }
  })
  return isFirstLineDead
}

export function replaceRows(units: Unit[][]): Unit[][] {
  const result: Unit[][] = []
  units.forEach((row: Unit[]) => {
    result.unshift(row)
  })
  return result
}

export function generateUnitsMatrix() {
  const team: Unit[][] = []
  for (let row = 0; row < 2; row++) {
    team.push([])
    for (let column = 0; column < 3; column++) {
      const randInd = Math.round(Math.random() * 8 + 1)
      team[row].push(getHeroByIndex(randInd))
    }
  }
  return team
}

function getHeroByIndex(ind: number): Unit {
  switch (ind) {
    case 1:
      return new Skeleton()
    case 2:
      return new Centaur()
    case 3:
      return new Bandit()
    case 4:
      return new ElfArcher()
    case 5:
      return new SkeletonMage()
    case 6:
      return new Archimage()
    case 7:
      return new Monk()
    case 8:
      return new Bishop()
    case 9:
      return new Sirena()
    default:
      throw new RangeError('Invalid index number!')
  }
}

export function generateInitiativeQueue(team1: Unit[][], team2: Unit[][]) {
  const result: Unit[] = []

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      result.push(team1[i][j])
      result.push(team2[i][j])
    }
  }

  result.sort((a: Unit, b: Unit) => {
    if (a.initiative > b.initiative) {
      return 1
    } else if (a.initiative < b.initiative) {
      return -1
    } else {
      const randNum = Math.random()
      if (randNum > 0.5) return 1
      else return -1
    }
  })

  return result
}
