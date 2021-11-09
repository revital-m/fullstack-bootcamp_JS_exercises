let country = window.prompt('Choose a country');
let language = window.prompt('What is the language?');
let isIsland = window.prompt('Is it an island?');
console.log(isIsland , typeof isIsland);
let population = Number(window.prompt('What is the population?'));


(function countryToLiveIn(language, isIsland, population,  country){
    let res;
    if ((language === 'English') && (population < 50) && (isIsland === 'false')) {
        res = `You should live in ${country}`;
    }
    else {
        res = `${country} does not meet your criteria`;
    }
    
    return console.log(res);
})(language, isIsland, population, country);
