
export class Combat{
    private pokemon1Turn: boolean
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
        this.pokemon1Turn = true
    }
    attaque(){
        const attacker = this.pokemon1Turn ? this.pokemon1 : this.pokemon2;
        const defender = this.pokemon1Turn ? this.pokemon2 : this.pokemon1;
        console.log(`${attacker.getName()} attaque ${this.pokemon2.getName()}`);
        this.pokemon1Turn = !this.pokemon1Turn
    }
}

export class Pokemon{

    constructor(private name: string,
                private level: number,
                private hp: number,
                private attack: number,
                private defense: number,
                private attackSFX: number,
                private defenseSFX: number,
                private speed: number) {
    }
    getName(): string {
        return this.name
    }
    getLevel(): number {
        return this.level
    }
    getHP(): number {
        const v1 = Math.floor((2 * this.hp) * this.level / 100 + 5)
        return v1
    }
    getAttack(): number {
        const v1 = Math.floor((2 * this.attack) * this.level / 100 + 5)
        return v1
    }
    getDefense(): number {
        const v1 = Math.floor((2 * this.defense) * this.level / 100 + 5)
        return v1
    }
    getSpeed(): number {
        const v1 = Math.floor((2 * this.speed) * this.level / 100 + 5)
        return v1
    }

}

const pikachu = new Pokemon("Pikachu", 1, 35, 55, 40, 50, 50, 90)
const salameche = new Pokemon("Salamèche", 1, 39, 52, 43, 60, 50, 65)
const combat = new Combat(pikachu, salameche)


