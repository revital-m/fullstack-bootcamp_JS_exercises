const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 9,
    neighbours: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],

    describe(){
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    } ,
    isIsland: function checkIsland(){ 
        return myCountry.neighbours.length !== 0 ? false:true
    }
}

myCountry.describe();
console.log(myCountry.isIsland());
