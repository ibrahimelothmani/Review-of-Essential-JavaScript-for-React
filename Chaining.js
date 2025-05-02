const hero = {
  name: "Hero",
  health: 100,
  attack: 20,
  defense: 10,
  speed: 15,
  luck: 0.5,
  genres: [
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
    "Puzzle",
    "Sports",
    "Racing",
  ],
};

function getHero() {
  return hero;
}

function calculateDamage(attack, defense) {
  return attack - defense;
}

const damage = calculateDamage(hero.attack, hero.defense);
console.log(`Damage dealt by ${hero.name}: ${damage}`);

// Chaining methods
const heroStatus = hero.attack;
const heroHealth = hero.health - damage;

const myHero = getHero()
  .attack.toString()
  .concat(" is the attack value.")
  .toUpperCase();

heroStatus > 0
  ? console.log(`${hero.name} is alive with ${hero.health} health.`)
  : console.log(`${hero.name} is defeated.`);

heroHealth > 0
  ? console.log(`${hero.name} is alive with ${heroHealth} health.`)
  : console.log(`${hero.name} is defeated.`);

myHero > 0
  ? console.log(`${myHero} is alive with ${heroHealth} health.`)
  : console.log(`${myHero} is defeated.`);
