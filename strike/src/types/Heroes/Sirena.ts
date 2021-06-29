import { Unit } from '../Unit'
import { Paralyze } from '../Behaviors/ActionBehavior/Paralyze'

export class Sirena extends Unit {
  public constructor() {
    const baseInfo = {
      name: 'Sirena',
      totalHealth: 80,
      initiative: 20,
    }
    super(new Paralyze(), baseInfo)
  }
}
