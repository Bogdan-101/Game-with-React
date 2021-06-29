import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class HealerSingle implements IActionBehavior {
  public healAmount: number

  constructor(healAmount: number) {
    this.healAmount = healAmount
  }

  public performAction(target: Unit): void {
    target.heal(this.healAmount)
  }
}
