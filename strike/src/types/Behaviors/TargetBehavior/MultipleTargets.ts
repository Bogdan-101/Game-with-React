import { Unit } from '../../Unit'
import { ITargetBehavior } from './TargetBehavior'
import { IActionBehavior } from '../ActionBehavior/ActionBehavior'

export class MultipleTarget implements ITargetBehavior {
  public performActionToTargets(targets: Unit[][], action: Pick<IActionBehavior, 'performAction'>) {
    targets.forEach((row: Unit[]) => {
      row.forEach((unit: Unit) => {
        action.performAction(unit)
      })
    })
  }
}
