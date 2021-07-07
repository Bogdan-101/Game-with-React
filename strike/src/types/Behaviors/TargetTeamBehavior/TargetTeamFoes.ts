import { Unit } from '../../Unit'
import { ITargetTeamBehavior } from './TargetTeamBehavior'

export class TargetTeamFoes implements ITargetTeamBehavior {
  public chooseTargetTeam(
    friends: Unit[][],
    foes: Unit[][]
  ): { friends: Unit[][]; foes: Unit[][]; isReverse: boolean } {
    // console.log('FOES')
    return { friends, foes, isReverse: false }
  }
}
