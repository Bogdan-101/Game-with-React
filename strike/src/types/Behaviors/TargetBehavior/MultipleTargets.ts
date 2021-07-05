import { Unit } from '../../Unit'
import { ITargetBehavior } from './TargetBehavior'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export class MultipleTarget implements ITargetBehavior {
  public performActionToTargets(
    team: Unit[][],
    action: Pick<IActionBehavior, 'performAction'>,
    target: Unit
  ) {
    team.forEach((row: Unit[]) => {
      row.forEach((unit: Unit) => {
        action.performAction(unit)
      })
    })
  }
}
