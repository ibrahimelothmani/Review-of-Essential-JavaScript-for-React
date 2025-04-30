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
    ]
};

function calculateDamage(attack, defense) {
    return attack - defense;
}

// Template literals ==> ES6 feature
// Template literals allow for easier string interpolation and multi-line strings
// Template literals with variables
const greeting = `Hello, my name is ${hero.name} and I have ${hero.health} health points.`;
const damage = `I can deal ${hero.attack} damage and I have ${hero.defense} defense points.`;
const speedLuck = `My speed is ${hero.speed} and my luck is ${hero.luck}.`;
const genresList = `I like the following genres: ${hero.genres.join(", ")}.`;
const heroInfo = `${greeting} ${damage} ${speedLuck} ${genresList}`;
console.log(heroInfo);
// Template literals with expressions
const damageCalculation = `I can deal ${calculateDamage(hero.attack, hero.defense)} damage.`;
console.log(damageCalculation);
// Template literals with multi-line strings
const multiLineString = `This is a multi-line string.
It can span multiple lines without using escape characters.`;
console.log(multiLineString);