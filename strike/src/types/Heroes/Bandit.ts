import { Unit } from '../Unit'
import { Range } from '../Behaviors/ActionBehavior/Range'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'
import { TargetTeamFoes } from '../Behaviors/TargetTeamBehavior/TargetTeamFoes'

export class Bandit extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Bandit',
      totalHealth: 75,
      initiative: 60,
    }
    super(
      {
        actionBehavior: new Range(30),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
        TargetTeamBehavior: new TargetTeamFoes(),
      },
      baseInfo
    )
  }
}
