import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Paralyze implements IActionBehavior {
  public performAction(targets: Unit[]): void {
    targets.forEach((foe: Unit) => {
      foe.paralyze()
    })
  }
}
