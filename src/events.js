class Event{
    constructor(roomIndex,choice,playerChoice){
        this.roomIndex = roomIndex;
        this.playerChoice = playerChoice;
    }

//     // Combat mechanics
//         // To Do: Generate alerts with the results.
    
//     // Player rolls 
//     playerDiceRoll() {
//         let roll = 0
//         roll += (Math.floor(Math.random() *20) +1)
//         console.log('Player rolled: ', roll)
//         return roll
//     }
//     // // Mob rolls
//     mobDiceRoll() {
//         let roll = 0
//         roll += (Math.floor(Math.random() *20) +1)
//         console.log('Mob rolled: ', roll)
//         return roll
//     }

//     // Mob fight combat method
//         // To Do: Incorporate alert for player consecuences. 
//         // To Do: Check if life subtraction works.
//         // To Do: Figure out how to subtract time.

//     mobCombat() {
//         let mobAttack = mobDiceRoll();
//         let playerAttack = playerDiceRoll();
        
//         // timeRemaining -10; need to figure if this works.
//         // if(timeRemaining <=0){
//         //     console.log("Time's Up")
//         //     showGameOver()}

//         if(mobAttack > playerAttack) {
//             console.log("Attack outcome: Mob Wins.")
//             lifeBarProgress - 25
//                 if(lifeBarProgress <=0) {
//                     console.log('Player died.')
//                     showGameOver()
//         }else {
//             console.log("Attack outcome: Player Wins.")
//         }
//     }

//     bossCombat() {
//     for (let i = 0; i < 3; i++){
//         let mobAttack = mobDiceRoll();
//         let playerAttack = playerDiceRoll();
        
//         // timeRemaining -5; need to figure if this works.
//         // if(timeRemaining <=0){
//         //     console.log("Time's Up")
//         //     showGameOver()}

//         if(mobAttack > playerAttack) {
//             console.log("Attack outcome: Mob Wins.")
//             lifeBarProgress - 25
//             if(lifeBarProgress <=0) {showGameOver()} 
//             console.log('Player died.')
//         }else {
//             console.log("Attack outcome: Player Wins.")
//             mobLifeBarProgress - 25
//             if(mobLifeBarProgress <=0) {showGameWon()} 
//             console.log('Boss died.')
//         }
//     }
// }
    
//     // orb event: life loss check method 

//     orbEvent(){
//         if(playerChoice === "Touch the Orb") {
//             let checkResult = playerDiceRoll()
//                 if(checkResult <= 15){
//                     console.log("Player failed the sanity check.")
//                     lifeBarProgress - 25
//                         if(lifeBarProgress <= 0) {
//                             console.log('Player died.')
//                             showGameOver()
//                         }

//                 }else{console.log("Player succeded check")}
//             }else{ timeRemaining -10 }
//         }
        
//         // hall event: combat check
//         if(playerChoice === "Read the second page") {
//             combat()
//             let checkResult = playerDiceRoll()
//                 if(checkResult <= 15){
//                     console.log("Player failed the sanity check.")
//                     lifeProgress - 25
//                 }else(console.log("Player succeded check"))
//         }

//     // room 1 [Destroyed Lab] event: Hidden Object, time loss

//     // room 2 [Rest Cuarters] event: Long rest, time loss

//     // room 3 [Pristine Lab] event Caesar Cipher, time loss

//     //  boss battle event
}