class Event{
    constructor(roomIndex,choice,playerChoice,timeRemaining,playerlife,bosslife){
        this.roomIndex = roomIndex;
        this.playerChoice = playerChoice;
    }


    
    // orb event: life loss check method 

    orbEvent(){
        if(playerChoice === "Touch the Orb") {
            let checkResult = playerDiceRoll()
                if(checkResult <= 15){
                    console.log("Player failed the sanity check.")
                    lifeBarProgress - 25
                        if(lifeBarProgress <= 0) {
                            console.log('Player died.')
                            showGameOver()
                        }

                }else{console.log("Player succeded check")}
            }else{ timeRemaining -10 }
        }
        
        // hall event: combat check
        if(playerChoice === "Read the second page") {
            combat()
            let checkResult = playerDiceRoll()
                if(checkResult <= 15){
                    console.log("Player failed the sanity check.")
                    lifeProgress - 25
                }else(console.log("Player succeded check"))
        }

    // room 1 [Destroyed Lab] event: Hidden Object, time loss

    // room 2 [Rest Cuarters] event: Long rest, time loss

    // room 3 [Pristine Lab] event Caesar Cipher, time loss

}