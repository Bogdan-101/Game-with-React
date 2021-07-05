import { Unit } from '../Unit'
import { Paralyze } from '../Behaviors/ActionBehavior/Paralyze'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'
import { TargetTeamFoes } from '../Behaviors/TargetTeamBehavior/TargetTeamFoes'

export class Sirena extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Sirena',
      totalHealth: 80,
      initiative: 20,
    }
    super(
      {
        actionBehavior: new Paralyze(),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
        TargetTeamBehavior: new TargetTeamFoes(),
      },
      baseInfo
    )
  }
}
