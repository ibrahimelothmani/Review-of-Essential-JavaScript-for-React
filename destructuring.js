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

// Destructuring the hero object
const { name, health, attack, defense, speed, luck, genres } = hero;
hero;

// Destructuring the genres array
const [firstGenre, secondGenre, ...otherGenres] = genres;
genres;
console.log(genres);
