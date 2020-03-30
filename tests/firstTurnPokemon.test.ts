import {Pokemon} from "../src/pokemon";

const whichTurn:  (pokemon1: Pokemon, pokemon2: Pokemon) => Pokemon = (pokemon1, pokemon2) => {
    return pokemon1.getSpeed() >= pokemon2.getSpeed() ? pokemon1 : pokemon2
}

describe("Check which pokemon start the fight", () => {
    const pikachu = new Pokemon("Pikachu", 1, 35, 55, 40, 50, 50, 90)
    const salameche = new Pokemon("Salamèche", 1, 39, 52, 43, 60, 50, 65)

    test("Pikachu start the fight", () => {
        expect(whichTurn(pikachu, salameche)).toBe(pikachu)
    })
    test("Salameche wait his turn", () => {
        expect(whichTurn(pikachu, salameche)).not.toBe(salameche)
    })

})

