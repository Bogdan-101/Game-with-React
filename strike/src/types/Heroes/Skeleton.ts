import { Unit } from '../Unit'
import { Melee } from '../Behaviors/ActionBehavior/Melee'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { MeleeHitMatrix } from '../Behaviors/HitMatrixBehavior/MeleeHitMatrix'

export class Skeleton extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Skeleton',
      totalHealth: 100,
      initiative: 50,
    }
    super(
      {
        actionBehavior: new Melee(25),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new MeleeHitMatrix(),
      },
      baseInfo
    )
  }
}
