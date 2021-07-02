import { getCoords } from '../helpers/helpers'
import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'
import { ITargetBehavior } from './Behaviors/TargetBehavior/TargetBehavior'
import { IHitMatrixBehavior } from './Behaviors/HitMatrixBehavior/HitMatrixBehavior'
import { IBehaviors } from './Behaviors.d'

export class Unit {
  constructor(
    Behaviors: IBehaviors,
    { name, totalHealth, initiative }: { name: string; totalHealth: number; initiative: number }
  ) {
    this.actionBehavior = Behaviors.actionBehavior
    this.targetBehavior = Behaviors.targetBehavior
    this.hitMatrixBehavior = Behaviors.hitMatrixBehavior
    this._health = totalHealth
    this._totalHealth = totalHealth
    this._name = name
    this._initiative = initiative
    this._baseInitiative = initiative
    this._armor = 0
  }

  public get name(): string {
    return this._name
  }
  public get health(): number {
    return this._health
  }
  public get totalHealth(): number {
    return this._totalHealth
  }
  public get baseInitiative(): number {
    return this._baseInitiative
  }
  public get initiative(): number {
    return this._initiative
  }
  public get armor(): number {
    return this._armor
  }

  public takeDamage(damage: number) {
    const trueDamage = damage * (1 - this.armor)
    if (this._health - trueDamage > 0) {
      this._health -= trueDamage
    } else {
      this._health = 0
    }
  }

  public heal(amount: number) {
    const trueHealth = this._health + amount
    if (trueHealth <= this._totalHealth) {
      this._health = trueHealth
    } else {
      this._health = this._totalHealth
    }
  }

  public defend(): void {
    this._armor = 0.5
  }

  public paralyze(): void {
    this._initiative = 0
  }

  public performAction(targets: Unit[][] | Unit): void {
    this.targetBehavior.performActionToTargets(targets, this.actionBehavior)
  }

  public getHitMatrix(friends: Unit[][], foes: Unit[][]): boolean[][] {
    return this.hitMatrixBehavior.getHitMatrix(friends, foes, getCoords(friends, this))
  }

  public round(): void {
    this._initiative = this.baseInitiative
    this._armor = 0
  }

  protected setActionBehavior(actionBehavior: IActionBehavior) {
    this.actionBehavior = actionBehavior
  }

  protected actionBehavior: IActionBehavior
  protected targetBehavior: ITargetBehavior
  protected hitMatrixBehavior: IHitMatrixBehavior

  private _name: string

  private _health: number

  private _totalHealth: number

  private _baseInitiative: number

  private _initiative: number

  private _armor: number
}
