import { Unit } from '../../Unit'
import { ITargetTeamBehavior } from './TargetTeamBehavior'

export class TargetTeamAllies implements ITargetTeamBehavior {
  public chooseTargetTeam(
    friends: Unit[][],
    foes: Unit[][]
  ): { friends: Unit[][]; foes: Unit[][]; isReverse: boolean } {
    const targetTeams = { friends: foes, foes: friends, isReverse: true }
    // console.log('*'.repeat(15))
    // console.log('friends: ', friends)
    // console.log('foes: ', foes)
    // console.log('target teams: ', targetTeams)
    // console.log('ALLIES')
    // console.log('*'.repeat(15))
    return targetTeams
  }
}
