import {Pokemon} from "../src/pokemon";
import {Combat, CombatTurn} from "../src/combat";

const attackAndCheck = (attacker: Pokemon, defender: Pokemon, expectedHp: number) => {
    attacker.doAttack()
    expect(defender.getCurrentHp()).toBe(expectedHp)
}

describe("Check pokemon fight", () => {
    it("Pikachu Salameche level 5 fight", () => {
        const pikachu = new Pokemon("Pikachu", 5, 35, 55, 40, 50, 50, 90)
        const salameche = new Pokemon("Salamèche", 5, 39, 52, 43, 60, 50, 65)
        const combat = new Combat(pikachu, salameche)

        for(let i = 0 ; i < 8; i++) {
            attackAndCheck(pikachu, salameche, 17-(2*i))
            attackAndCheck(salameche, pikachu, 16-(2*i))
        }

    })

})

