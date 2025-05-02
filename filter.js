const hero = {
    name: "Hero",
    health: 100,
    attack: 20,
    defense: 10,
    speed: 15,
    luck: 0.5,
    genres: [{
        id : 1,
        name: "Action",
        description: "Action games are characterized by physical challenges, including hand–eye coordination and reaction-time.",
        examples: ["Call of Duty", "Halo", "Doom"]
    },
    {
        id : 2,
        name: "Adventure",
        description: "Adventure games are a genre of video games in which the player assumes the role of a protagonist in an interactive story driven by exploration and puzzle-solving.",
        examples: ["The Legend of Zelda", "Monkey Island", "Grim Fandango"]
    },
    {
        id : 3,
        name: "RPG",
        description: "Role-playing video games (RPGs) are a genre of video game where players assume the roles of characters in a fictional setting.",
        examples: ["Final Fantasy", "The Witcher", "Skyrim"]
    },
    {
        id : 4,
        name: "Strategy",
        description: "Strategy games emphasize skillful thinking and planning to achieve victory.",
        examples: ["StarCraft", "Civilization", "Age of Empires"]
    },
    {
        id : 5,
        name: "Simulation",
        description: "Simulation games are designed to closely simulate real-world activities.",
        examples: ["The Sims", "SimCity", "Microsoft Flight Simulator"]
    },
    {
        id : 6,
        name: "Puzzle",
        description: "Puzzle video games require problem-solving skills, including logic, pattern recognition, sequence solving, and word completion.",
        examples: ["Tetris", "Portal", "Candy Crush"]
    },
    {
        id : 7,
        name: "Sports",
        description: "Sports video games simulate the practice of sports.",
        examples: ["FIFA", "NBA 2K", "Madden NFL"]
    },
    {
        id : 8,
        name: "Racing",
        description: "Racing games are a genre of video game in which the player participates",  
        examples: ["Need for Speed", "Gran Turismo", "Mario Kart"]
    }
]
};


// filter methods
function filterByGenre(genre) {
    return hero.genres.filter(g => g.name.toLowerCase() === genre.toLowerCase())
}
console.log(filterByGenre("Action"));