import { Unit } from '../../Unit'
import { ITargetBehavior } from './TargetBehavior'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export class SingleTarget implements ITargetBehavior {
  public performActionToTargets(target: Unit, action: Pick<IActionBehavior, 'performAction'>) {
    action.performAction(target)
  }
}
