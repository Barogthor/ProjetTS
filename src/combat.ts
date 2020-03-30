import {Pokemon} from "./pokemon";

export class Combat{
    private pokemon1Turn: boolean
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
        this.pokemon1Turn = pokemon1.getSpeed() >= pokemon1.getSpeed()
    }
    attaque(){
        const attacker = this.getAttacker()
        const defender = this.getDefender()
        console.log(`${attacker.getName()} attaque ${defender.getName()}`);
        this.pokemon1Turn = !this.pokemon1Turn
    }
    getAttacker(): Pokemon{
        return this.pokemon1Turn ? this.pokemon1 : this.pokemon2;
    }
    getDefender(): Pokemon{
        return this.pokemon1Turn ? this.pokemon2 : this.pokemon1;
    }
}