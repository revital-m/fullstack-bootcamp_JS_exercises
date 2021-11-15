const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find(element => (element.id === id));
}

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({
        name,
        id,  
        price,
        amount: 1,
    }); 
}

function buy(candyStore, id) {
    let candy = getCandy(candyStore, id);
    let price = getPrice(candyStore, id);
    candy.amount--;
    candyStore.cashRegister += price;
}


let idCandy = getCandy(candyStore, 'as12f');
console.log(`idCandy = `,idCandy);
let priceOfCandy = getPrice(candyStore, 'as12f');
console.log(`priceOfCandy = `,priceOfCandy);
let addingCandy = addCandy(candyStore, 'e1r4f', 'm&m',4);
console.log(`addingCandy = `,candyStore);
let buyingCandy = buy(candyStore, 'e1r4f');
console.log(`buyingCandy = `,candyStore);