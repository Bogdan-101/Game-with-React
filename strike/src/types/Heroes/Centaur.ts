import { Unit } from '../Unit'
import { Melee } from '../Behaviors/ActionBehavior/Melee'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { MeleeHitMatrix } from '../Behaviors/HitMatrixBehavior/MeleeHitMatrix'
import { TargetTeamFoes } from '../Behaviors/TargetTeamBehavior/TargetTeamFoes'

export class Centaur extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Centaur',
      totalHealth: 150,
      initiative: 60,
    }
    super(
      {
        actionBehavior: new Melee(25),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new MeleeHitMatrix(),
        TargetTeamBehavior: new TargetTeamFoes(),
      },
      baseInfo
    )
  }
}
