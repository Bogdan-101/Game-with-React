import { Unit } from '../Unit'
import { Healer } from '../Behaviors/ActionBehavior/Healer'
import { MultipleTarget } from '../Behaviors/TargetBehavior/MultipleTargets'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'
import { TargetTeamAllies } from '../Behaviors/TargetTeamBehavior/TargetTeamAllies'

export class Bishop extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Bishop',
      totalHealth: 130,
      initiative: 20,
    }
    super(
      {
        actionBehavior: new Healer(25),
        targetBehavior: new MultipleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
        TargetTeamBehavior: new TargetTeamAllies(),
      },
      baseInfo
    )
  }
}
