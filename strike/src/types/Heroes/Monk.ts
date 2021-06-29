import { Unit } from '../Unit'
import { HealerSingle } from '../Behaviors/ActionBehavior/HealerSingle'

export class Monk extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Monk',
      totalHealth: 90,
      initiative: 20,
    }
    super(new HealerSingle(40), baseInfo)
  }
}
