import { Unit } from '../Unit'
import { Range } from '../Behaviors/ActionBehavior/Range'
import { SingleTarget } from '../Behaviors/TargetBehavior/SingleTarget'
import { AllHitMatrix } from '../Behaviors/HitMatrixBehavior/AllHitMatrix'

export class ElfArcher extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Elf Archer',
      totalHealth: 90,
      initiative: 60,
    }
    super(
      {
        actionBehavior: new Range(45),
        targetBehavior: new SingleTarget(),
        hitMatrixBehavior: new AllHitMatrix(),
      },
      baseInfo
    )
  }
}
