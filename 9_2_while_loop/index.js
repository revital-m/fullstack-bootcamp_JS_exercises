let populations = [9, 1441, 333, 46];

function populationPercentages(arr){
    let percentages = [];
    let i = 0;
    while (i < arr.length) {
        percentages.push(percentageOfWorld2(arr[i]));
        i++;
    }
    return percentages;
}

const percentageOfWorld2 = (population) => (
    Math.round((((population/7900)*100) + Number.EPSILON) * 100) / 100
);

let percentages = populationPercentages(populations);
console.log(percentages);