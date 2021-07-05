import { Unit } from '../Unit'
import { Mage } from '../Behaviors/ActionBehavior/Mage'
import { MultipleTarget } from '../Behaviors/TargetBehavior/MultipleTargets'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'
import { TargetTeamFoes } from '../Behaviors/TargetTeamBehavior/TargetTeamFoes'

export class SkeletonMage extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Skeleton mage',
      totalHealth: 50,
      initiative: 40,
    }
    super(
      {
        actionBehavior: new Mage(25),
        targetBehavior: new MultipleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
        TargetTeamBehavior: new TargetTeamFoes(),
      },
      baseInfo
    )
  }
}
