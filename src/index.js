class Pokemon {
    constructor(name) {
        this.name = name
    }
}
const pokemon = new Pokemon("pika")
pokemon.parle = () => console.log("pika pika chhuuuu")



console.log(pokemon)
pokemon.parle()