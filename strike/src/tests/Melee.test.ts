import * as helpers from '../helpers/helpers'
import { Unit } from '../types/Unit'

describe('Melee warrior hit Matrix', () => {
  describe('melee warrior hit matrix for first enemy line', () => {
    it('should be able to attack first enemy line when positioned in the center of first line', () => {
      /*
        team1: 
          unit | unit | unit
          unit| skeleton | unit
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          true | true | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][1] = skeleton
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, true, true],
        [false, false, false],
      ])
    })
    it('should be able to attack first and center enemy when positioned to the left of the first line', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton| unit | unit
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          true | true | false
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][0] = skeleton
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, true, false],
        [false, false, false],
      ])
    })
    it('should be able to attack center and right enemy when positioned to the right of the first line', () => {
      /*
        team1: 
          unit | unit | unit
          unit | unit | skeleton
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          false | true | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][2] = skeleton
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, true, true],
        [false, false, false],
      ])
    })
    it('should not be able to attack first enemy line whe positioned in the second line while first line is alive', () => {
      /*
        team1: 
          unit | unit | skeleton
          unit | unit | unit
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          false | false | false
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][2] = skeleton
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [false, false, false],
      ])
    })
    it('should be able to attack first enemy line when positioned in the center of the second line while first line is dead', () => {
      /*
        team1: 
          unit | skeleton | unit
          dead| dead | dead
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          true | true | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][1] = skeleton
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(100000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, true, true],
        [false, false, false],
      ])
    })
    it('should be able to attack first and center enemy when positioned to the left of the second line while first line is dead', () => {
      /*
        team1: 
          skeleton | unit | unit
          unit| unit | unit
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          true | true | false
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][0] = skeleton
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(100000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, true, false],
        [false, false, false],
      ])
    })
    it('should be able to attack center and right enemy when positioned to the right of the second line while first line is dead', () => {
      /*
        team1: 
          unit | unit | skeleton
          unit | unit | unit
        ========================
        team2:
          unit | unit | unit
          unit | unit | unit
        should get:
          false | true | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][2] = skeleton
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(100000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, true, true],
        [false, false, false],
      ])
    })
    it('should be able to attack center and right enemy when positioned to the left of the first line while left enemy is dead', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton | unit | unit
        ========================
        team2:
          dead | unit | unit
          unit | unit | unit
        should get:
          false | true | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][0] = skeleton
      team2[0][0].takeDamage(10000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, true, true],
        [false, false, false],
      ])
    })
    it('should be able to attack right enemy when positioned to the right of the first line while right and center enemy is dead', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton | unit | unit
        ========================
        team2:
          dead | dead | unit
          unit | unit | unit
        should get:
          false | false | true
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][0] = skeleton
      team2[0][0].takeDamage(10000)
      team2[0][1].takeDamage(10000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, true],
        [false, false, false],
      ])
    })
    it('should be able to attack center and left enemy when positioned to the right of the first line while right enemy is dead', () => {
      /*
        team1: 
          unit | unit | unit
          unit | unit | skeleton
        ========================
        team2:
          unit | unit | dead
          unit | unit | unit
        should get:
          true | true | false
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][2] = skeleton
      team2[0][2].takeDamage(10000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, true, false],
        [false, false, false],
      ])
    })
    it('should be able to attack left enemy when positioned to the right of the first line while right and center enemy is dead', () => {
      /*
        team1: 
          unit | unit | unit
          unit | unit | skeleton
        ========================
        team2:
          unit | dead | dead
          unit | unit | unit
        should get:
          true | false | false
          false | false | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][2] = skeleton
      team2[0][2].takeDamage(10000)
      team2[0][1].takeDamage(10000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [true, false, false],
        [false, false, false],
      ])
    })
  })
  describe('melee warrior hit matrix for second enemy line', () => {
    it('should be able to attack second enemy line when positioned in the center of first line while first enemy line is dead', () => {
      /*
        team1: 
          unit | unit | unit
          unit | skeleton | unit
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          true | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][1] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, true],
      ])
    })
    it('should be able to attack center and left enemy when positioned to the left of first line while first enemy line is dead', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton | unit | unit
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          true | true | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][0] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, false],
      ])
    })
    it('should be able to attack center and right enemy when positioned to the left of first line while first enemy line and left enemy on second line is dead', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton | unit | unit
        ========================
        team2:
          dead | dead | dead
          dead | unit | unit
        should get:
          false | false | false
          false | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][0] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team2[1][0].takeDamage(9000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [false, true, true],
      ])
    })
    it('should be able to attack center and right enemy when positioned to the right of first line while first enemy line is dead', () => {
      /*
        team1: 
          unit | unit | unit
          unit | unit | skeleton
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          false | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][2] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [false, true, true],
      ])
    })
    it('should be able to attack center and left enemy when positioned to the right of first line while first enemy line and right enemy on second line is dead', () => {
      /*
        team1: 
          unit | unit | unit
          skeleton | unit | unit
        ========================
        team2:
          dead | dead | dead
          unit | unit | dead
        should get:
          false | false | false
          true | true | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[0][2] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team2[1][2].takeDamage(9000)
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, false],
      ])
    })
    it('should be able to attack second enemy line when positioned in the center of second line while first enemy and friends line is dead', () => {
      /*
        team1: 
          unit | skeleton | unit
          dead | dead | dead
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          true | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][1] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, true],
      ])
    })
    it('should be able to attack left and center enemy on second line when positioned to the left of second line while first enemy and friends line is dead', () => {
      /*
        team1: 
          skeleton | unit | unit
          dead | dead | dead
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          true | true | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][0] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, false],
      ])
    })
    it('should be able to attack right and center enemy on second line when positioned to the left of second line while first enemy and friends line is dead and left enemy on second line is dead', () => {
      /*
        team1: 
          skelton | unit | unit
          dead | dead | dead
        ========================
        team2:
          dead | dead | dead
          dead | unit | unit
        should get:
          false | false | false
          false | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][0] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team2[1][0].takeDamage(9000)
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [false, true, true],
      ])
    })
    it('should be able to attack right and center enemy on second line when positioned to the right of second line while first enemy and friends line is dead', () => {
      /*
        team1: 
          unit | unit | skeleton
          dead | dead | dead
        ========================
        team2:
          dead | dead | dead
          unit | unit | unit
        should get:
          false | false | false
          false | true | true
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][2] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [false, true, true],
      ])
    })
    it('should be able to attack left and center enemy on second line when positioned to the right of second line while first enemy and friends line is dead and right enemy on second line is dead', () => {
      /*
        team1: 
          unit | unit | skeleton
          dead | dead | dead
        ========================
        team2:
          dead | dead | dead
          unit | unit | dead
        should get:
          false | false | false
          true | true | false
      */
      const skeleton = helpers.getHeroByIndex(1)
      const team1 = helpers.generateUnitsMatrix()
      const team2 = helpers.generateUnitsMatrix()
      team1[1][2] = skeleton
      team2[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      team2[1][2].takeDamage(9000)
      team1[0].forEach((unit: Unit) => {
        unit.takeDamage(9000)
      })
      const hitMatrix = skeleton.getHitMatrix(team1, team2)
      expect(hitMatrix.hitMatrix).toEqual([
        [false, false, false],
        [true, true, false],
      ])
    })
  })
})
