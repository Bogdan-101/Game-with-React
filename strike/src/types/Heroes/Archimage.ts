import { Unit } from '../Unit'
import { Mage } from '../Behaviors/ActionBehavior/Mage'
import { MultipleTarget } from '../Behaviors/TargetBehavior/MultipleTargets'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'

export class Archimage extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Archimage',
      totalHealth: 90,
      initiative: 40,
    }
    super(
      {
        actionBehavior: new Mage(30),
        targetBehavior: new MultipleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
      },
      baseInfo
    )
  }
}
