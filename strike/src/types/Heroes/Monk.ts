import { Unit } from '../Unit'
import { Healer } from '../Behaviors/ActionBehavior/Healer'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'

export class Monk extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Monk',
      totalHealth: 90,
      initiative: 20,
    }
    super(
      {
        actionBehavior: new Healer(25),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
      },
      baseInfo
    )
  }
}
