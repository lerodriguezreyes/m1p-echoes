class Game {
    constructor() {
      this.landingPage = document.querySelector("#landingPage");
      this.highScores = document.querySelector("#highScores");
      this.gameScreen = document.querySelector("#roomGamePlay");
    }

    gameLossScreen(){
        this.gameScreen.style.height = 0
    }
}