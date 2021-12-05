const storm = {
    superPower: 'flying',
    // superPower: 'controlling the weather!',
    printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower();