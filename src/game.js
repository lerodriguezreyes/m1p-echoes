class Game {
  constructor(
    room,
    timeRemaining,
    playerLife,
  ) {
    this.room = room;
    this.timeRemaining = timeRemaining;
    this.playerLife = playerLife;
    this.roomIndex = 0
    this.currentRoom = null
  }

 

  


  changeRoom(question, firstChoice, secondChoice, roomImage, narrativeContainer){
    this.roomIndex++
    this.currentRoom = this.room[this.roomIndex]
    roomImage.src = this.currentRoom.image
    console.log(this.currentRoom);
    console.log(this.roomIndex);
    question.innerText= this.currentRoom.roomChoices
    firstChoice.innerText = this.currentRoom.playerChoice[0]
    secondChoice.innerText = this.currentRoom.playerChoice[1]
    narrativeContainer.innerText = this.currentRoom.roomDescription
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
   
    if (playerCheck < this.currentRoom.dc) {
      this.timeRemaining - 10;
      console.log("Environment check failed!");
     if (!this.isGameOver()){
      this.currentRoom = this.room[2]
     }
    } else {
        this.timeRemaining - 5;
      console.log("Environment check passed!");
      if (!this.isGameOver()){
        this.currentRoom = this.room[2]
       }
    }
  }

  // Combat mechanics

  // Mob fight combat method To Do: Incorporate alerts for combat.
  // Maybe something like this.
        //<button onclick="myFunction()">Try it</button>

        /*function myFunction() {
          alert("Hello! I am an alert box!");
        }*/


  mobCombat() {
    let mobAttack = mobDiceRoll();
    // EXTRA it would be cool to animate a d20 dice roll here.
    let playerAttack = playerDiceRoll();
    // EXTRA it would be cool to animate a d20 dice roll here.
    this.timeRemaining - 15;
    this.isGameOver();
    if (mobAttack > playerAttack) {
      console.log("Attack outcome: Mob Wins.");
      alert("The enemy attacked you and ran off! -25 HP");
      this.playerLife - 25;
      this.isGameOver();
    } else {
      console.log("Attack outcome: Player Wins.");
      alert("Well done IronHunter. You slayed an enemy!");
      ;
    }
  }

  bossCombat() {
    for (let i = 0; i < 3; i++) {
      let bossAttack = mobDiceRoll();
      let playerAttack = playerDiceRoll();
      this.timeRemaining - 10;
      this.GameOver();
      if (bossAttack > playerAttack) {
        alert("The boss attacked you. Tendrils of psychic damage run over your mind. -25 HP")
        console.log("Attack outcome: Mob Wins.");
        this.playerLife - 25;

        this.isGameOver();
      } else {
        console.log("Attack outcome: Player Wins.");
        this.bossLife - 25;
        alert("Take that you eldritch fiend! You deal -25 HP damage to the Boss with your weapon.")
        this.isGameWon();
      }
    }
  }
}