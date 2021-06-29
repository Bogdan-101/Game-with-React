import { Unit } from '../Unit'
import { Range } from '../Behaviors/ActionBehavior/Range'

export class Bandit extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Bandit',
      totalHealth: 75,
      initiative: 60,
    }
    super(new Range(30), baseInfo)
  }
}
