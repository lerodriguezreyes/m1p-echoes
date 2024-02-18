document.addEventListener("DOMContentLoaded", () =>{


/******************************** Constant variables ********************************/
const time = 300 //game lasts for 300 seconds

/************  Html views  ************/
  // View divs
const landingPage = document.querySelector("#landingPage");

/******************************** Data elements ********************************/
// rooms
cuarters.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/cuarters.jpg?raw=true";
gameOverImage.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/gameOver.jpg?raw=true";
gameWonImage.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/gameWon.png?raw=true";
hallRoom.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/hall.jpg?raw=true";
laboratoryPristine.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab1.jpg?raw=true";
laboratoryDestroyed.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab2.jpg?raw=true";
entranceRoom.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/vault.jpg?raw=true";
orbRoom.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/orbRoom.jpg?raw=true";
cipherfail.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/alternateLab.jpg?raw=true";
landingPage.src = "https://prompthero.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt3TlRBNFlqZzJOUzA1WVdJMkxUUXlZV1V0T1dZME1pMHdNR1F3TmprME4ySXhPREFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--bd34b9e9ce5bc68d800eec32e7ae9ab7daebcc2f/prompthero-prompt-58d830c1fbd.png";
detective.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/detective.png?raw=true";

// enemies
eyesMob.src= "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/eyes.png?raw=true";
mob1.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/mob1.png?raw=true";
boss.src = "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/mob2.png?raw=true";

// notes
note1.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note1.jpg?raw=truehttps://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note1.jpg?raw=true";
note2.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note2.jpg?raw=true";
note3.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note3.jpg?raw=true";
note4.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note4.jpg?raw=true";
plaque.src ="https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/plaque.jpg?raw=true";

// narrative bits


/******************************** Timer ********************************/

startTimer();

function startCountdown() {
  game.timeRemaining = 300
  console.log("timer start");
  let minutes = Math.floor(game.timeRemaining / 60).toString().padStart(2, "0");
  let seconds = (game.timeRemaining % 60).toString().padStart(2, "0");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  timer = setInterval(() => {
    console.log(game.timeRemaining);
    minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
    seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");
    game.timeRemaining--;
    timeRemainingContainer.innerText = `${minutes}:${seconds}`;

    if (game.timeRemaining <= 0) {
      showGameOver();
    }
  }, 1000);

}


// Enable music and loop the track
let vid = document.getElementById("music");
vid.preload = "auto";
vid.loop = true;


})