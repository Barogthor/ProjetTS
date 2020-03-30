import {Pokemon} from "./pokemon";

export class CombatTurn{
    private pokemon1Turn: boolean
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
        this.pokemon1Turn = pokemon1.getSpeed() >= pokemon1.getSpeed()
    }
    next(){
        this.pokemon1Turn = !this.pokemon1Turn
    }

    getAttacker(): Pokemon{
        return this.pokemon1Turn ? this.pokemon1 : this.pokemon2;
    }
    getDefender(): Pokemon{
        return this.pokemon1Turn ? this.pokemon2 : this.pokemon1;
    }
}

export class Combat{
    private pokemonTurn: CombatTurn;

    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
        this.pokemonTurn = new CombatTurn(pokemon1, pokemon2);
        pokemon1.enterCombat(this);
        pokemon2.enterCombat(this);
    }

    private getAttacker() : Pokemon{
        return this.pokemonTurn.getAttacker()
    }
    private getDefender() : Pokemon{
        return this.pokemonTurn.getDefender()
    }

    attaque(damage: number){
        this.getDefender().doDefend(damage)
        this.pokemonTurn.next()
    }

}