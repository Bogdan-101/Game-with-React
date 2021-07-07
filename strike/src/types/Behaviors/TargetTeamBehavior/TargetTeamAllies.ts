import { Unit } from '../../Unit'
import { ITargetTeamBehavior } from './TargetTeamBehavior'

export class TargetTeamAllies implements ITargetTeamBehavior {
  public chooseTargetTeam(
    friends: Unit[][],
    foes: Unit[][]
  ): { friends: Unit[][]; foes: Unit[][]; isReverse: boolean } {
    const targetTeams = { friends: foes, foes: friends, isReverse: true }
    return targetTeams
  }
}
