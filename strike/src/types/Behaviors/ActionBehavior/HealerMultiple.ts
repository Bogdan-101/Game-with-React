import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class HealerMultiple implements IActionBehavior {
  public healAmount: number

  constructor(healAmount: number) {
    this.healAmount = healAmount
  }

  public performAction(targets: Unit[]): void {
    targets.forEach((friend: Unit) => {
      friend.heal(this.healAmount)
    })
  }
}
