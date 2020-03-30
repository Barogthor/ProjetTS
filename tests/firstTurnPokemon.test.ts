import {Pokemon} from "../src/pokemon";
import {CombatTurn} from "../src/combat";


describe("Check which pokemon start the fight", () => {
    const pikachu = new Pokemon("Pikachu", 5, 35, 55, 40, 50, 50, 90)
    const salameche = new Pokemon("Salamèche", 5, 39, 52, 43, 60, 50, 65)
    const turn = new CombatTurn(pikachu, salameche);

    it("Pikachu start the fight", () => {
        expect(turn.getAttacker()).toBe(pikachu)
    })
    it("Salameche wait his turn", () => {
        expect(turn.getDefender()).toBe(salameche)
    })

})

