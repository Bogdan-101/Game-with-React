import { Unit } from './../../Unit'

export interface ITargetTeamBehavior {
  chooseTargetTeam(
    friends: Unit[][],
    foes: Unit[][]
  ): { friends: Unit[][]; foes: Unit[][]; isReverse: boolean }
}
