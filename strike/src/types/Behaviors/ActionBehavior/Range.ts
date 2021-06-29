import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Range implements IActionBehavior {
  public damage: number

  constructor(damage: number) {
    this.damage = damage
  }

  public performAction(target: Unit): void {
    target.takeDamage(this.damage)
  }
}
