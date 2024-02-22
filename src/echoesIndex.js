
window.addEventListener('load', () => {
  console.log('Connected!');
  let time = 120;
  let playerLife = 100;
  let bossLife = 125;
/******************************************* Html views  *******************************************/
  // View 
    const landingScreen = document.getElementById('landingScreen');
    const gamePlayScreen = document.getElementById('gamePlayScreen');
    const startGame = document.getElementById('navLandingToVault');
    
  // Game view elements
    let roomImage = document.getElementById('roomImage');
    let narrativeContainerDiv = document.getElementById("narrative");
    let choicesContainerDiv = document.getElementById("choices");
    let choice1Button = document.getElementById('choice1');
    let choice2Button = document.getElementById('choice2');
    let notesContainerDiv = document.getElementById("notes");
 //  let cipherButton = document.getElementById("cipherButton")
    
    //Game HUD
    const playerLifeContainer = document.getElementById('playerLifeBar');
    const timeRemainingContainer = document.getElementById('timeRemaining');
    
    // Game Navigation Buttons
    const navVaultToOrbButton = document.getElementById('navVaultToOrb');
    const navRetryButton = document.getElementById('restartButton');

/*************************************  Game data *************************************/ 
    const roomImagesArray = [
      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/vault.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/orbRoom.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/hall.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab2.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/cuarters.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab1.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/mob2.png?raw=true"
    ]
  
    const roomDescription = [
        
      // Vault Entrance Scene
      "You are part of an organization dedicated to protecting mankind against all threats. Both known and unknown, yet now a days the threats are more... mundane in nature. During your turn of strongly encouraged asistance in organizing office supplies, find a door you've never seen before. You decide to open it. Now you find yourself in front of an intricate vault door. Next to it you see a tarnished plaque.",
      
      // Orb Scene
      "Upon entering the vault, you find yourself in a 15 by 15 foot open chamber where a glowing orb sits atop a pedestal in the center. Suddendly the massive door behind you slams shut.",
    
      // Hallway Scene
      "You end up in a long hallway dimly lit by flickering lights dangling from the ceeling and ensconed into the very foundation of the building. Up ahead you see 3 marked doors with notes. At your right you spot a bowie knife pinning 2 loose sheets of paper. The handwriting on the paper seems familiar.",
    
      // Destroyed Lab Scene
      "This expansive room once served as a laboratory. It has clearly seen better days. The walls are marred with ash and scorch marks. All of the equipment is strewn across the benches haphazarly. Amidst the caos, you find a broken chest that holds a barely legible note that reads:  shift by 3.",
      
      // Living Cuarters Scene
      "You find yourself in an inmaculately clean room featuring tables with chairs, desks, neatly made beds and a nearly empty closet.",
      
      // Pristine Lab Scene
      "This expansive room once served as a laboratory. The supplies here range from weapon components, to munitions, to chemicals and biological specimens.",
        
      // Boss Battle Scene
      "Armed with knowledge, you gaze into the abyss and await to confront another monster. You yell into the darknes: Unknown Horror come face me if you dare! Next to you a grayish green portal opens.",
    
    ]
  
  // Player data
      let currentPlayer = prompt("Type your first name:" )
      
      const players = ["Celiel", "Dalton", "Daniel", "Emely", "Luis", "Jaser", "Joel", "John", "Jonathan", "Juan", "Jose", "Kenneth", "Kevin", "Naiomy", "Roxangelica", "Shannon"] 

      function randomPlayerName() {
        let randomIndex = Math.floor(Math.random()) * (players.length - 1)
        let filteredPlayersArray = players.filter(player => player !== currentPlayer)
        return filteredPlayersArray[randomIndex] 
      }

      randomName = randomPlayerName()

  // Game data

  const notesArray = [

    `If something can cross over from conceptual space into reality, taking physical form, then something can cross into the opposite direction. It must be possible to take a physical entity, mechanically extract the idea it embodies, apmplify that idea and broadcast it up into the conceptual space. A bigger idea, an universal code. One designed to fight this thing. ~ ${randomName}`,

    `Ok, ok so hear me out. The airlock configuration is not necessarily tied to a 24-hour cycle. If we really wanted to leave early all we have to do is hot start the process. Maube a controlled burst of arcane energy? Maybe a magic word? Ha! I got it:  Open Sesame! ~ ${randomName}`,

    `The monsters we are fighting obviously are not natural or real. We took time to dissect a couple before their bodies vanished. Its… strange. They have no organs, no systems. Only teeth, mouths, spiny proyections of bone, teeth, and mouths. Did I say it has teeth? ~ ${randomName}`,

    `The protections surrounding the bunker are ingenious. The anti-divination effect is too powerful to maintain indefinitely. So it is only designed to work periodically, say every 24 hours or so. Then the protections slowly recharge over time. That stored energy is then used to power it again. The cycle must obviously be sicronized with whatever is normally preventing us from discovering this bunker hidden in the basement in the first place. ~ ${randomName}`,

    `How do you fight an enemy without ever discovering it exists? How do you win without even realizng youre at war? What do we do? ~ ${randomName}`,

    ` Ok, so apparently something out there is eating our memories and triying to keep us in the dark. I say to hell with it. Let us use what we have got here and scrap something together to disable the cloak and take the fight to it. We do not really understand what is going on, but maybe we could see what we are missing. Or at least… remember. ~ ${randomName} `,

    `I have double checked the wards lining the bunker, and I did not find any evidence of physical, technological or arcane weakening. This is as solid and secure as it gets. Guess we have to wait for the timer to run out… Nope X that idea. The thing is here again, we cannot stay here! Whatever it is, its getting smarter. It is finding us faster. It must be pushing in harder. ~ ${randomName}`
 ] 

  function randomNote() {
    let randomIndex = Math.floor(Math.random()) * (notesArray.length - 1)
    return notesArray[randomIndex] 
  }


      const plaqueNote = `Dear ${currentPlayer}, It is vital that you heed my instructions to the best of your abilities. Things are dire. Regrettably, I cannot provide further details, it could endanger us all. Rest assured; we are embarking on a hunt for the most dangerous enemy our organization has ever faced. More information awaits within the containment chamber. Upon ingress, the doors will seal behind you. You will be contained inside until the sequence automatically initiates 5 hours later. It is imperative not to overlook this timeframe. Refrain from bringing anything, you will have all you need provided there. Lastly, under no circumstances should you take anything out of the vault. Wishing you all the best of luck. Your mentor, Dustin.`
  
      const hallnote = `Hi me. Yeah, this is weird. I’m taking to myself here. It’s a weird situation. If it’s any consolation this is not the first time you’ve been here! As best as we gather, this has happened before. Hell, I’d bet it’s been going on ever since ol’ Dustin disappeared. Long story short, Dustin's warning is real and we’re picking up the slack after he went on break. So yeah, we’re stuck here trying to bootstrap a solution from stuff we’ve cobbled up together. We're so close to figuring this out.`
  
      const hallNote2 = `Wanna know a secret? Daniel told me once this place isn’t really a containment vault. It’s a shelter. The threat's outside, somewhere… We're assuming the worst-case scenario: whatever’s out there is omniscient. This vault might be the only place in creation IT can’t directly see into. Somehow, IT messes with people’s memories. IT’s not really invisible; maybe protected by some kind of obfuscation array? Might be for the best, since once you see IT, IT can also see you. The more you learn about IT, the better IT can find you. Yeah, it’s the abyss that looks back at you stuff. I’m afraid that naming IT might escalate things. so I’m going vague. I don’t think IT’s sentient, but IT lashes out at those who perceive IT. IT's incredibly lethal, erases people from memory. SHIT, too many IT references made you aware of IT, now IT is aware of you.`
       
     const rooms = [ 
      
      // Vault Entrance Room
      new Room (roomDescription[0], "Will you read the plaque?", ["Read it.", "Enter the vault"], 0, 0,roomImagesArray[0]),
      
      // Orb Room
      new Room (roomDescription[1],"What will you do?", ["Inspect the room",  "Touch the Orb"], 1, 15, roomImagesArray[1]),

      // Hallway
      new Room (roomDescription[2], "Will you read on or heed your own counsel?", ["Read the second page", "Keep exploring"], 2, 10, roomImagesArray[2]),
      
      // Destroyed Laboratory
      new Room (roomDescription[3], "There's got to be something here to explain what's going on. Will you search this room?", ["Yes","No"], 3, 10, roomImagesArray[3]),
      
      // Living Cuarters
      new Room (roomDescription[4], "Investigating is tough work. Will you rest?",["Yes","No"], 4, 20, roomImagesArray[4]),
  
      // Pristine Laboratory
      new Room (roomDescription[5], "I'm stuck here, might as well search for something useful. Search the room?", ["Yes", "No"], 5, 10, roomImagesArray[5]),
      
       // Boss Battle
       new Room (roomDescription[6], "What will you do?", ["Attack", "Run away"], 6, 20, roomImagesArray[6]),

    ]

    
    /******************************** Create game instance ********************************/
     
    const game = new Game(rooms, time, playerLife, bossLife)

    let timer;
    
    function startCountdown() {
      // let time = game.timeRemaining 
      console.log("timer start");
      let minutes = Math.floor(game.timeRemaining / 60).toString().padStart(2, "0");
      let seconds = (game.timeRemaining % 60).toString().padStart(2, "0");
      timeRemainingContainer.innerText = `${minutes}:${seconds}`;
    
      timer = setInterval(() => {
        console.log(game.timeRemaining);
         minutes = Math.floor(game.timeRemaining / 60).toString().padStart(2, "0");
         seconds = (game.timeRemaining % 60).toString().padStart(2, "0");
    
        // time--;
        game.timeRemaining--
        timeRemainingContainer.innerText = `${minutes}:${seconds}`;
        playerLifeContainer.style.width = `${game.playerLife}%`
        game.isGameOver()
        if (time <= 0) {
          console.log("Time is less than or equal to zero!!!!")
          clearInterval(timer);
        }
      }, 1000);
    
    }
/******************************** Life bar ********************************/
playerLifeContainer.style.width = `${game.playerLife/2}%`
playerLifeContainer.style.backgroundColor = "red"
playerLifeContainer.style.height = `5px`

/***************************** Gameplay  *************************/ 
 
  // vault entrance   
  startGame.addEventListener('click', () => {
    game.currentRoom = rooms[0]
    game.roomIndex = 0

  landingScreen.style.display = 'none';
  landingScreen.style.height = '0px';
  gamePlayScreen.style.display = 'flex';
  console.log("clicking start for vault room");
  
  // image change
  roomImage.src = game.currentRoom.image
  console.log('image changed');

  // narrative change
  narrativeContainerDiv.innerText = game.currentRoom.roomDescription
  console.log('description changed');

  //question change

  choicesContainerDiv.innerText = game.currentRoom.roomChoices
  console.log('choices changed');
  
  // buttons change
  choice1Button.innerText = game.currentRoom.playerChoice[0]
  choice1Button.addEventListener('click', () =>{    
    if (game.roomIndex == 0) {
      alert(`${plaqueNote}`)
      // start timer
      startCountdown();
      console.log('countdown');
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
      return
    }
    else if (game.roomIndex == 1) {
      alert(`After searching for some time, you find nothing out of  the ordinary save for the Orb in the pedestal.`)
      game.timeRemaining -= 15
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
      return
    }
    else if (game.roomIndex == 2) {
      alert(`${hallNote2}`)
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
      return
    }
    else if (game.roomIndex == 6) {
      console.log("Boss battle!!!")
      game.bossCombat()
      return
    }
    else{
      alert(`You found a note that says: ${randomNote()}`)
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)

    }
    

      })
  
  choice2Button.innerText =  game.currentRoom.playerChoice[1]
  choice2Button.addEventListener('click', () =>{
    if (game.roomIndex == 0) {
      startCountdown();
      console.log('countdown');
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
      return
    }

    else if (game.roomIndex == 1) {
      alert(`You touch the orb. At first nothing happens, then pain like you've never felt before starts running through your veins. You suffer -25 HP.`)
      game.playerLife -= 15
      game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
      return
    }

    else if (game.roomIndex == 6) {
      console.log("RUN!!!")
      game.playerLife -= 100
      game.isGameOver()
      return
    }
   game.envCheck()
    game.changeRoom(choicesContainerDiv, choice1Button, choice2Button, roomImage, narrativeContainerDiv)
    console.log("cliking for environment check")
  })

  
  }) // start game 

// /******************************** Restart Button ********************************/
// navRetryButton.addEventListener('click', () => {
//   gamePlayScreen.style.display = 'none';
//   landingScreen.style.display = 'flex';  
//   console.log("clicking to restart.");
//   clearInterval(timer)
//   console.log("Timer reset")
//   playerLife = 100
//   bossLife = 100
//   console.log('Life Stats reset')
//     })

/******************************** Cipher Button ********************************/
//  let cipherImage2 = document.getElementById('image2')
//  let rotation = 0;
//  const angle = 15;
//  function rotateCipher(){
//   rotation = (rotation + angle) % 360;
//   image2.style.transform = `rotate(${rotation}deg)`;
//  }

//   cipherButton.addEventListener('click', () => {
//     console.log("clicking")
//     rotateCipher()
//     console.log("image rotated")
//   })

/******************************** Hidden Object ********************************/
// document.getElementById()


}) // end of Index