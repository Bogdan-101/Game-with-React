import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'
import { IHitMatrixBehavior } from './Behaviors/HitMatrixBehavior/HitMatrixBehavior'
import { ITargetBehavior } from './Behaviors/TargetBehavior/TargetBehavior'
import { Unit } from './Unit'

export type IUnit = {
  name: string
  health: number
  totalHealth: number
  initiative: number
  baseInitiative: number
  initiative: number
  armor: number
  isStunned: boolean
  takeDamage(damage: number): void
  heal(amount: number): void
  defend(): void
  paralyze(): void
  performAction(team: Unit[][], target: Unit): void
  getHitMatrix(friends: Unit[][], foes: Unit[][]): { hitMatrix: boolean[][], isReverse: boolean }
  round(): void
  actionBehavior: IActionBehavior
  targetBehavior: ITargetBehavior
  hitMatrixBehavior: IHitMatrixBehavior
}
