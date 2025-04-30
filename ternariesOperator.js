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


const result = calculateDamage > 50 ? 'Hero win' : 'Hero lose';
result;

const result2 = calculateDamage > 1 ? 'Hero win' : 'Hero lose';
result2;