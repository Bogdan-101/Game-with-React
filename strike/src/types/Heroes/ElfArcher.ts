import { Unit } from '../Unit'
import { Range } from '../Behaviors/ActionBehavior/Range'

export class ElfArcher extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Elf Archer',
      totalHealth: 90,
      initiative: 60,
    }
    super(new Range(45), baseInfo)
  }
}
