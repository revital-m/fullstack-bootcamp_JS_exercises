const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 9,
    neighbours: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],

    describe(){
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    } ,
    checkIsland: function(){ 
        this.isIsland =  myCountry.neighbours.length !== 0 ? false:true;
        return this.isIsland;
    }
}

myCountry.describe();
console.log(myCountry.checkIsland());
