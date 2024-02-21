class Game {
  constructor(
    room,
    timeRemaining,
    playerLife,
  ) {
    this.room = room;
    this.timeRemaining = timeRemaining;
    this.playerLife = playerLife;
    this.bossLife = 100;
  }

  getRoom(){
    return this.room
  }

  

  isGameOver() {
    if (this.playerLife < 0) {
      console.log("Game Over: Player is dead.");
      return true;
    } else if (this.timeRemaining <= 0) {
      console.log("Game Over: Time is up!");
      return true;
    }
  }

  isGameWon() {
    if (this.bossLife <= 0) {
      console.log("Game won: Boss is dead!");
      return true;
    } else {
      return false;
    }
  }

  // Player rolls
  playerDiceRoll() {
    let roll = 0;
    roll += Math.floor(Math.random() * 20) + 1;
    console.log("Player rolled: ", roll);
    return roll;
  }

  // Mob rolls
  mobDiceRoll() {
    let roll = 0;
    roll += Math.floor(Math.random() * 20) + 1;
    console.log("Mob rolled: ", roll);
    return roll;
  }

  // Environment check mechanics, NEED TO CHECK KEEPS GIVING PASS.
  envCheck(){  
    let playerCheck = this.playerDiceRoll()
    if (playerCheck < this.room[3]) {
      this.timeRemaining - 10;
      console.log("Environment check failed!");
      this.isGameOver();
    } else {
        this.timeRemaining - 5;
      console.log("Environment check passed!");
      this.isGameOver();
    }
  }

  // Combat mechanics

  // Mob fight combat method To Do: Incorporate alert for player consecuences after combat.
  mobCombat() {
    let mobAttack = this.mobDiceRoll();
    let playerAttack = this.playerDiceRoll();
    this.timeRemaining - 15;
    this.isGameOver();
    if (mobAttack > playerAttack) {
      console.log("Attack outcome: Mob Wins.");
      this.playerLife - 25;
      this.isGameOver();
    } else {
      console.log("Attack outcome: Player Wins.");
    }
  }

  bossCombat() {
    for (let i = 0; i < 3; i++) {
      let bossAttack = this.mobDiceRoll();
      let playerAttack = this.playerDiceRoll();
      this.timeRemaining - 10;
      this.GameOver();
      if (bossAttack > playerAttack) {
        console.log("Attack outcome: Mob Wins.");
        this.playerLife - 25;
        this.isGameOver();
      } else {
        console.log("Attack outcome: Player Wins.");
        this.bossLife - 25;
        this.isGameWon();
      }
    }
  }
}