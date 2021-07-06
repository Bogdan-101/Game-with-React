import { Unit } from '../../Unit'
import { ITargetTeamBehavior } from './TargetTeamBehavior'

export class TargetTeamAllies implements ITargetTeamBehavior {
  public chooseTargetTeam(
    friends: Unit[][],
    foes: Unit[][]
  ): { friends: Unit[][]; foes: Unit[][]; isReverse: boolean } {
    console.log('*'.repeat(15))
    console.log('friends: ', friends)
    console.log('foes: ', foes)
    console.log('ALLIES')
    console.log('*'.repeat(15))
    return { friends: foes, foes: friends, isReverse: true }
  }
}
