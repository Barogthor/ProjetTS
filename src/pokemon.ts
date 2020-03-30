import {Combat} from "./combat";

export class Pokemon{
    private currentCombat?: Combat;
    private currentHp: number;

    constructor(private name: string,
                private level: number,
                private hp: number,
                private attack: number,
                private defense: number,
                private attackSFX: number,
                private defenseSFX: number,
                private speed: number) {
        this.currentHp = this.getHP();
    }
    getName(): string {
        return this.name
    }
    getLevel(): number {
        return this.level
    }
    getHP(): number {
        const v1 = Math.floor((2 * this.hp + 5) * this.level / 100 + this.level + 10)
        return v1
    }
    getAttack(): number {
        const v1 = Math.floor((2 * this.attack + 5) * this.level / 100 + 5)
        return v1
    }
    getDefense(): number {
        const v1 = Math.floor((2 * this.defense + 5) * this.level / 100 + 5)
        return v1
    }
    getAttackSFX(): number {
        const v1 = Math.floor((2 * this.attackSFX + 5) * this.level / 100 + 5)
        return v1
    }
    getDefenseSFX(): number {
        const v1 = Math.floor((2 * this.defenseSFX + 5) * this.level / 100 + 5)
        return v1
    }
    getSpeed(): number {
        const v1 = Math.floor((2 * this.speed + 5) * this.level / 100 + 5)
        return v1
    }

    getCurrentHp = () => this.currentHp
    isDead = () => this.currentHp <= 0

    doDefend(damage: number){
        const v1 = Math.floor(damage / this.getDefense())
        const v2 = Math.floor(v1 / 50) + 2
        this.currentHp -= v2
    }

    doAttack(){
        if(!this.currentCombat)
            throw new Error("Not in combat");
        if(this.isDead())
            throw new Error(`${this.name} can't attack when already dead`);
        const v1 = Math.floor(2 * this.level / 5 + 2) * this.getAttack() * 2
        this.currentCombat.attaque(v1);
    }

    enterCombat(combat: Combat){
        this.currentCombat = combat;
    }

    leaveCombat(){
        this.currentCombat = undefined;
    }

}



