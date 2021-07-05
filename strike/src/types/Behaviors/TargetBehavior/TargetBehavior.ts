import { Unit } from './../../Unit'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export interface ITargetBehavior {
  performActionToTargets(
    team: Unit[][],
    action: Pick<IActionBehavior, 'performAction'>,
    target: Unit
  ): void
}
