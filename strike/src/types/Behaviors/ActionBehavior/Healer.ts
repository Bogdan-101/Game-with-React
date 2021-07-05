import { Unit } from '../../Unit'
import { IActionBehavior } from './ActionBehavior'

export class Healer implements IActionBehavior {
  public power: number
  public classType: string

  constructor(healAmount: number) {
    this.power = healAmount
    this.classType = 'healer'
  }

  public performAction(target: Unit): void {
    target.heal(this.power)
  }
}
