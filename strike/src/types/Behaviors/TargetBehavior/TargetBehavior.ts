import { Unit } from './../../Unit'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export interface ITargetBehavior {
  performActionToTargets(
    targets: Unit | Unit[][],
    action: Pick<IActionBehavior, 'performAction'>
  ): void
}
