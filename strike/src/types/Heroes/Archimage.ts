import { Unit } from '../Unit'
import { Mage } from '../Behaviors/ActionBehavior/Mage'

export class Archimage extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Archimage',
      totalHealth: 90,
      initiative: 40,
    }
    super(new Mage(30), baseInfo)
  }
}
