class Game {
  constructor(room, timeRemaining, playerLife) {
    this.room = room;
    this.timeRemaining = timeRemaining;
    this.playerLife = playerLife;
    this.roomIndex = 0;
    this.currentRoom = null;
  }

  changeRoom(
    question,
    firstChoice,
    secondChoice,
    roomImage,
    narrativeContainer
  ) {
    if (this.roomIndex !== 6) {
      this.roomIndex++;
      this.currentRoom = this.room[this.roomIndex];
      roomImage.src = this.currentRoom.image;
      console.log(this.currentRoom);
      console.log(this.roomIndex);
      question.innerText = this.currentRoom.roomChoices;
      firstChoice.innerText = this.currentRoom.playerChoice[0];
      secondChoice.innerText = this.currentRoom.playerChoice[1];
      narrativeContainer.innerText = this.currentRoom.roomDescription;
    } else {
      console.log("Room not changing because you're at the end.");
    }
  }

  isGameOver() {
    if (this.playerLife < 0) {
      console.log("Game Over: Player is dead.");
      gamePlayScreen.style.display = "none";
      gamePlayScreen.style.height = "0px";
      console.log("gamePlayScreen closed.");
      document.getElementById("gameOver").style.display = "flex";
    } else if (this.timeRemaining <= 0) {
      console.log("Game Over: Time is up!");
      gamePlayScreen.style.display = "none";
      gamePlayScreen.style.height = "0px";
      console.log("gamePlayScreen closed.");
      document.getElementById("gameOver").style.display = "flex";
    }
  }

  isGameWon() {
    if (this.bossLife <= 0) {
      console.log("Game won: Boss is dead!");
      landingScreen.style.display = "none";
      landingScreen.style.height = "0p";
      gamePlayScreen.style.display = "none";
      gamePlayScreen.style.height = "0p";
      console.log("gamePlayScreen closed.");
      document.getElementById("gameWon").gameWonScreen.style.display = "flex";
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
  envCheck() {
    let playerCheck = this.playerDiceRoll();

    if (playerCheck < this.currentRoom.dc) {
      console.log("This current room ----> ", this.currentRoom);
      console.log("Player life before the check ----> ", this.playerLife);
      this.playerLife -= 25;
      console.log("Player life after the check ---->", this.playerLife);
      this.timeRemaining -= 10;
      console.log("Time after the check ---->", this.timeRemaining);
      console.log("Environment check failed!");
      if (!this.isGameOver()) {
        this.currentRoom = this.room[2];
      }
    } else {
      console.log("Environment check passed!");
      this.timeRemaining -= 5;
      if (!this.isGameOver()) {
        this.currentRoom = this.room[2];
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
    let mobAttack = this.mobDiceRoll();
    // EXTRA it would be cool to animate a d20 dice roll here.
    let playerAttack = this.playerDiceRoll();
    // EXTRA it would be cool to animate a d20 dice roll here.
    this.timeRemaining -= 15;
    this.isGameOver();
    if (mobAttack > playerAttack) {
      console.log("Attack outcome: Mob Wins.");
      alert("The enemy attacked you and ran off! -25 HP");
      this.playerLife -= 25;
      this.isGameOver();
    } else {
      console.log("Attack outcome: Player Wins.");
      alert("Well done IronHunter. You slayed an enemy!");
    }
  }

  bossCombat() {
    for (let i = 0; i < 3; i++) {
      let bossAttack = this.mobDiceRoll();
      let playerAttack = this.playerDiceRoll();
      this.timeRemaining -= 10;
      this.isGameOver();
      if (bossAttack > playerAttack) {
        alert(
          "The boss attacked you. Tendrils of psychic damage run over your mind. -25 HP"
        );
        console.log("Attack outcome: Mob Wins.");
        this.playerLife -= 25;

        this.isGameOver();
      } else {
        console.log("Attack outcome: Player Wins.");
        this.bossLife -= 25;
        alert(
          "Take that you eldritch fiend! You deal -25 HP damage to the Boss with your weapon."
        );
        this.isGameWon();
      }
    }
  }
}
