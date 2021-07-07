import { getCoords } from '../helpers/helpers'
import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'
import { ITargetBehavior } from './Behaviors/TargetBehavior/TargetBehavior'
import { IHitMatrixBehavior } from './Behaviors/HitMatrixBehavior/HitMatrixBehavior'
import { IBehaviors } from './Behaviors.d'
import { IUnit } from './Unit.d'
import { ITargetTeamBehavior } from './Behaviors/TargetTeamBehavior/TargetTeamBehavior'

export class Unit implements IUnit {
  constructor(
    Behaviors: IBehaviors,
    { name, totalHealth, initiative }: { name: string; totalHealth: number; initiative: number }
  ) {
    this.actionBehavior = Behaviors.actionBehavior
    this.targetBehavior = Behaviors.targetBehavior
    this.hitMatrixBehavior = Behaviors.hitMatrixBehavior
    this.targetTeamBehavior = Behaviors.TargetTeamBehavior
    this._health = totalHealth
    this._totalHealth = totalHealth
    this._name = name
    this._initiative = initiative
    this._baseInitiative = initiative
    this._armor = 0
    this._isStunned = false
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
  public get isStunned(): boolean {
    return this._isStunned
  }

  public takeDamage(damage: number): void {
    const trueDamage = damage * (1 - this.armor)
    if (this._health - trueDamage > 0) {
      this._health -= trueDamage
    } else {
      this._health = 0
    }
  }

  public heal(amount: number): void {
    if (this._health === 0) {
      return
    }
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

  public removeArmor(): void {
    this._armor = 0
  }

  public paralyze(): void {
    this._isStunned = true
  }

  public removeParalyze(): void {
    this._isStunned = false
  }

  public performAction(team: Unit[][], target: Unit): void {
    this.targetBehavior.performActionToTargets(team, this.actionBehavior, target)
  }

  public getHitMatrix(
    friends: Unit[][],
    foes: Unit[][]
  ): { hitMatrix: boolean[][]; isReverse: boolean } {
    const teams = this.targetTeamBehavior.chooseTargetTeam(friends, foes)
    console.log('teams: ', teams, 'hero: ', this.name)
    let coords = getCoords(teams.friends, this)
    if (coords.length === 0) {
      coords = getCoords(teams.foes, this)
    }
    return {
      hitMatrix: this.hitMatrixBehavior.getHitMatrix(teams.friends, teams.foes, coords),
      isReverse: teams.isReverse,
    }
  }

  public round(): void {
    this._initiative = this.baseInitiative
    this._armor = 0
  }

  protected setActionBehavior(actionBehavior: IActionBehavior) {
    this.actionBehavior = actionBehavior
  }

  public actionBehavior: IActionBehavior
  public targetBehavior: ITargetBehavior
  public hitMatrixBehavior: IHitMatrixBehavior
  public targetTeamBehavior: ITargetTeamBehavior

  private _name: string

  private _health: number

  private _totalHealth: number

  private _baseInitiative: number

  private _initiative: number

  private _armor: number

  private _isStunned: boolean
}
