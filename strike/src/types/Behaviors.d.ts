import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'
import { ITargetBehavior } from './Behaviors/TargetBehavior/TargetBehavior'
import { IHitMatrixBehavior } from './Behaviors/HitMatrixBehavior/HitMatrixBehavior'
import { ITargetTeamBehavior } from './Behaviors/TargetTeamBehavior/TargetTeamBehavior'

export interface IBehaviors {
  actionBehavior: IActionBehavior
  targetBehavior: ITargetBehavior
  hitMatrixBehavior: IHitMatrixBehavior
  TargetTeamBehavior: ITargetTeamBehavior
}
