import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Mage implements IActionBehavior {
  public damage: number

  constructor(damage: number) {
    this.damage = damage
  }

  public performAction(targets: Unit[]): void {
    targets.forEach((foe: Unit) => {
      foe.takeDamage(this.damage)
    })
  }
}
