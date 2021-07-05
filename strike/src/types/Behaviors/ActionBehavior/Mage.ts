import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Mage implements IActionBehavior {
  public power: number
  public classType: string

  constructor(damage: number) {
    this.power = damage
    this.classType = 'damager'
  }

  public performAction(target: Unit): void {
    target.takeDamage(this.power)
  }
}
