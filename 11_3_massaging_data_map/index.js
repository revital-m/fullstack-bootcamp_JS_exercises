const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];


//* Q-1
function nameFromArr(arr){
    return arr.map(function(key){
        return key.name;
    });
}

let nameArr = nameFromArr(data);
console.log(`nameArr = `,nameArr);

//* Q-2
function bornBefor1990(arr){
    let myArr = [];
    arr.forEach(element => {
        let birthdayArr = element.birthday.split('-');
        if (birthdayArr[2] < 1990) {
            myArr.push(element);
        }
    });
    return myArr;
}

let bornBefor1990Arr = bornBefor1990(data);
console.log(`bornBefor1990Arr = `,bornBefor1990Arr);

//* Q-3
function food(arr){
    let myFoodObj = {};
    arr.forEach(element => {
        element.favoriteFoods.meats.forEach(element => {
            if (!myFoodObj[element]) {
                myFoodObj[element] = 1;
            }
            else {
                myFoodObj[element]++;
            }
        });
        element.favoriteFoods.fish.forEach(element => {
            if (!myFoodObj[element]) {
                myFoodObj[element] = 1;
            }
            else {
                myFoodObj[element]++;
            }
        });
    });
    return myFoodObj;
}

let foodArr = food(data);
console.log(`foodArr = `,foodArr);
