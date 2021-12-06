/**
 * 1. when invoking the function getStrength() in line 12 we need to define 'this' to point to the hero object.
 */

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

const test = whoIsStronger(hero.getStrength.bind(hero));
console.log(test);
