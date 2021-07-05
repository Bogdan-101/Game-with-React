import { Unit } from '../../Unit'
import { ITargetBehavior } from './TargetBehavior'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export class SingleTarget implements ITargetBehavior {
  public performActionToTargets(
    team: Unit[][],
    action: Pick<IActionBehavior, 'performAction'>,
    target: Unit
  ) {
    action.performAction(target)
  }
}
