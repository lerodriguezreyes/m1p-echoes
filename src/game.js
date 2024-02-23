class Game {
  constructor(room, timeRemaining, playerLife, bossLife) {
    this.room = room;
    this.timeRemaining = timeRemaining;
    this.playerLife = playerLife;
    this.roomIndex = 0;
    this.currentRoom = null;
    this.bossLife = bossLife;
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
      this.timeRemaining += 30
      document.getElementById("gameOver").style.display = "flex";
      return true
    } else if (this.timeRemaining <= 0) {
      console.log("Game Over: Time is up!");
      gamePlayScreen.style.display = "none";
      gamePlayScreen.style.height = "0px";
      console.log("gamePlayScreen closed.");
      this.timeRemaining += 30
      document.getElementById("gameOver").style.display = "flex";
      return true
    } else {
      return false
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
      this.timeRemaining += 30
      document.getElementById("gameWon").style.display = "flex";
      return true
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

  envCheck() {
    let playerCheck = this.playerDiceRoll();

    if (playerCheck < this.currentRoom.dc) {
      console.log("This current room ----> ", this.currentRoom);
      this.mobCombat();
      console.log("Environment check failed!");
    } else {
      console.log("Environment check passed!");
      this.timeRemaining -= 5;
    }

    if (!this.isGameOver()) {
        this.currentRoom = this.room[2];
    }
}

  // Combat mechanics

  // Mob fight combat method 

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
    alert("Next to you, a faint gray portal materializes, disgorging a monstrous entity comprised of a disturbing fusion of grotesque features: writhing tentacles, numerous eyes, and contorted limbs, instilling profound dread and emanating malevolence with its mere presence.")
    if (mobAttack > playerAttack) {
      console.log("Attack outcome: Mob Wins.");
      alert("The enemy attacked you and ran off! You suffer -25 HP.");
      this.playerLife -= 25;
      this.isGameOver();
    } else {
      console.log("Attack outcome: Player Wins.");
      alert("Well done IronHunter. You slayed the creature!");
    }
  }

  bossCombat() {
      let bossAttack = this.mobDiceRoll();
      let playerAttack = this.playerDiceRoll();
      this.timeRemaining -= 5;
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
