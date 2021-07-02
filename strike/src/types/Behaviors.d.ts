import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'
import { ITargetBehavior } from './Behaviors/TargetBehavior/TargetBehavior'
import { IHitMatrixBehavior } from './Behaviors/HitMatrixBehavior/HitMatrixBehavior'

export interface IBehaviors {
  actionBehavior: IActionBehavior,
  targetBehavior: ITargetBehavior,
  hitMatrixBehavior: IHitMatrixBehavior
}
