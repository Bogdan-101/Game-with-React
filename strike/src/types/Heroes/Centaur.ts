import { Unit } from '../Unit'
import { Melee } from '../Behaviors/ActionBehavior/Melee'

export class Centaur extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Centaur',
      totalHealth: 150,
      initiative: 60,
    }
    super(new Melee(50), baseInfo)
  }
}
