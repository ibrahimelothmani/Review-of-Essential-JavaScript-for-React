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
    // Method to increase health
    heal(amount) {
      this.health += amount;
      console.log(`${this.name} healed for ${amount}. Health: ${this.health}`);
      return this; // Return this for chaining
    },
    // Method to boost attack
    boostAttack(amount) {
      this.attack += amount;
      console.log(`${this.name}'s attack boosted by ${amount}. Attack: ${this.attack}`);
      return this;
    },
    // Method to add a genre
    addGenre(genre) {
      if (!this.genres.includes(genre)) {
        this.genres.push(genre);
        console.log(`${this.name} added genre: ${genre}. Genres: ${this.genres.join(", ")}`);
      } else {
        console.log(`${this.name} already has genre: ${genre}`);
      }
      return this;
    },
    // Method to increase luck
    increaseLuck(multiplier) {
      this.luck *= multiplier;
      console.log(`${this.name}'s luck multiplied by ${multiplier}. Luck: ${this.luck}`);
      return this;
    }
  };