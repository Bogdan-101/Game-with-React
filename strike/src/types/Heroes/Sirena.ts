import { Unit } from '../Unit'
import { Paralyze } from '../Behaviors/ActionBehavior/Paralyze'
import { MultipleTarget } from '../Behaviors/TargetBehavior/MultipleTargets'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'

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
        targetBehavior: new MultipleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
      },
      baseInfo
    )
  }
}
