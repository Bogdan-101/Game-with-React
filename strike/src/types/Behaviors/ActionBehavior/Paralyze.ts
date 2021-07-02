import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Paralyze implements IActionBehavior {
  public performAction(target: Unit): void {
    target.paralyze()
  }
}
