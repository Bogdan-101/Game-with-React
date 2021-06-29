import { Unit } from '../Unit'
import { HealerMultiple } from '../Behaviors/ActionBehavior/HealerMultiple'

export class Bishop extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Bishop',
      totalHealth: 130,
      initiative: 20,
    }
    super(new HealerMultiple(25), baseInfo)
  }
}
