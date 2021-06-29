import { Unit } from '../Unit'
import { Mage } from '../Behaviors/ActionBehavior/Mage'

export class SkeletonMage extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Skeleton mage',
      totalHealth: 50,
      initiative: 40,
    }
    super(new Mage(20), baseInfo)
  }
}
