const hero = {
    name: "TheCoder",
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

// Correct usage of destructuring
 const { name, health, attack, defense, speed, luck, genres } = hero;
hero;

// Correctly create a new array with the spread operator
const newGenres = [...genres, "Horror"];
newGenres;

console.log(calculateDamage(attack, defense));
console.log(`The hero ${name} has ${health} health points.`);