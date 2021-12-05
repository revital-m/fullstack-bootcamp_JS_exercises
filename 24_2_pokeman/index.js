function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(idx){
    if (idx < this.attackList.length && idx >= 0) {
        console.log(`${this.name} used ${this.attackList[idx]}`);
    }
}

const pokemon1 = new Pokemon('Pikachu','Electric', ['electrical power', 'strength']);
const pokemon2 = new Pokemon('Charizard','Flying', ['flying', 'fire', 'strength']);
const pokemon3 = new Pokemon('Ivysaur','Grass', ['grass', 'poison', 'strength']);

pokemon1.callPokemon();
pokemon1.attack(0);
pokemon2.callPokemon();
pokemon2.attack(1);
pokemon3.callPokemon();
pokemon3.attack(1);