import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Paralyze implements IActionBehavior {
  public classType: string

  constructor() {
    this.classType = 'paralyzer'
  }

  public performAction(target: Unit): void {
    target.paralyze()
  }
}
