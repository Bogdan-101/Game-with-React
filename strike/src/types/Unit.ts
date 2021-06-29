import { IActionBehavior } from './Behaviors/ActionBehavior/ActionBehavior'

export class Unit {
  protected actionBehavior: IActionBehavior

  private _name: string
  public get name(): string {
    return this._name
  }

  private _health: number
  public get health(): number {
    return this._health
  }

  private _totalHealth: number
  public get totalHealth(): number {
    return this._totalHealth
  }

  private _baseInitiative: number
  public get baseInitiative(): number {
    return this._baseInitiative
  }

  public _initiative: number
  public get initiative(): number {
    return this._initiative
  }

  private _armor: number
  public get armor(): number {
    return this._armor
  }

  constructor(
    actionBehavior: IActionBehavior,
    { name, totalHealth, initiative }: { name: string; totalHealth: number; initiative: number }
  ) {
    this.actionBehavior = actionBehavior
    this._health = totalHealth
    this._totalHealth = totalHealth
    this._name = name
    this._initiative = initiative
    this._baseInitiative = initiative
    this._armor = 0
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

  public performAction(targets: Unit[] | Unit): void {
    this.actionBehavior.performAction(targets)
  }

  protected setActionBehavior(actionBehavior: IActionBehavior) {
    this.actionBehavior = actionBehavior
  }

  public round(): void {
    this._initiative = this.baseInitiative
    this._armor = 0
  }
}
