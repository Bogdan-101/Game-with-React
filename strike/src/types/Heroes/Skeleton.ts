import { Unit } from '../Unit'
import { Melee } from '../Behaviors/ActionBehavior/Melee'

export class Skeleton extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Skeleton',
      totalHealth: 100,
      initiative: 50,
    }
    super(new Melee(25), baseInfo)
  }
}
