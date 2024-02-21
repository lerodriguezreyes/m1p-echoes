
window.addEventListener('load', () => {
  console.log('Connected!');
  let playerLife = 100;
/******************************************* Html views  *******************************************/
  // View 
    const landingScreen = document.getElementById('landingScreen');
    const highScoresScreen = document.getElementById('highScoresScreen');
    const gamePlayScreen = document.getElementById('gamePlayScreen');
    const gameOverScreen = document.getElementById('gameOver');
    const gameWonScreen = document.getElementById('gameWon');

  // Landing Screen Navigation elements
    const navLandingToVaultButton = document.getElementById('navLandingToVault');
    //TO DO: Botton for High Scores
  //const navLandingToHighScoresButton = document.getElementById('navLandingToHighScores')

  // High Scores Screen Navigation element
    //TO DO: button to return to landing screen
    //const backtoMenuButton = document.getElementById('backToMenu')

  // Game view elements
    let roomImage = document.getElementById('roomImage');
    let narrativeContainerDiv = document.getElementById("narrative");
    let choicesContainerDiv = document.getElementById("choices");
    let eventContainerDiv = document.getElementById("event");
    let notesContainerDiv = document.getElementById("notes");
    
    //Game HUD
    const playerLifeContainer = document.getElementById('playerLifeBar');
    const timeRemainingContainer = document.getElementById('timeRemaining');
    
    // Game Navigation Buttons
    const navVaultToOrbButton = document.getElementById('navVaultToOrb');
    const navOrbToHallButton =  document.getElementById('navOrbToHall');
    const navHallToOrbButton = document.getElementById('navHallToOrb');
    const navHallToRoom1Button =  document.getElementById('navHallToRoom1');
    const navHallToRoom2Button =  document.getElementById('navHallToRoom2');
    const navHallToRoom3Button =  document.getElementById('navHallToRoom3');
    const navRoomToHallButton =  document.getElementById('navRoomToHall');
    const navRetryButton = document.getElementById('restartButton');

  //
/*************************************  Game data *************************************/ 
    const roomImagesArray = [
      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/vault.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/orbRoom.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/hall.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab1.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/cuarters.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/lab2.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/gameOver.jpg?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/gameWon.png?raw=true"
    ]

    let mobImagesArray = [
      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/eyes.png?raw=true",

      "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/mob1.png?raw=true",

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
      "Armed with knoledge, you gaze into the abyss and await to confront another monster. You yell into the darknes: Unknown Horror come face me if you dare! Next to you a grayish green portal opens.",
    
    ]
  
  
  // Player data
      const players = ["Celiel", "Dalton", "Daniel", "Emely", "Luis", "Jaser", "Joel", "John", "Jonathan", "Juan", "Jose", "Kenneth", "Kevin", "Naiomy", "Roxangelica", "Shannon"] 
  
      let currentPlayer = prompt("Type your first name:" )
  
      function randomPlayerName() {
        let randomIndex = Math.floor(Math.random()) * (players.length - 1)
        let filteredPlayersArray = players.filter(player => player !== currentPlayer)
        return filteredPlayersArray[randomIndex] 
      }
      
      randomName = randomPlayerName()

  // Notes data
  
      const plaqueNote = `Dear ${currentPlayer}, I understand this situation may be unsettling. However, it is vital that you heed my instructions to the best of your abilities. Regrettably, I cannot provide further details, it could endanger us all. Rest assured; we are embarking on a hunt for the most dangerous quarry our organization has ever faced. More information awaits within the containment chamber. Upon ingress, the doors will seal behind you. You will be contained inside until the sequence automatically initiates 24 hours later. It is imperative not to overlook this timeframe. Refrain from bringing more rations than necessary for the allotted hours. Lastly, under no circumstances should you take anything out of the containment vault. Wishing you all the best of luck. Your mentor, Dustin.`
  
      const hallnote = `Hi me. Yeah, this is weird. I’m taking to myself via letters here. It’s a shitty situation. If it’s any consolation this is not the first time you’ve been here! As best as we gather, this has happened before. Hell, I’d bet it’s been going on ever since ol’ Dustin disappeared. This place contains a ancient secret we are fighting. The warning's real; we’re picking up Dustin's slack after he went on break and never came back. So yeah, we’re stuck here trying to bootstrap a solution from remains and stuff we’ve cobbled up together. We're so close to figuring this out. The next page contains the details of the threat but DON’T READ IT YET. Explore first. With love, from me to me. ~ ${randomName}.`
  
      const hallNote2 = `Wanna know a secret? Daniel told me once this place isn’t really a containment vault. It’s a shelter. The threat's outside, somewhere… We're assuming the worst-case scenario: whatever’s out there is omniscient. This vault might be the only place in creation IT can’t directly see into. Somehow, IT messes with people’s memories. IT’s not really invisible; maybe protected by some kind of obfuscation array? Might be for the best, since once you see IT, IT can also see you. The more you learn about IT, the better IT can find you. Yeah, it’s the abyss that looks back at you stuff. I’m afraid that naming IT might escalate things. so I’m going vague. I don’t think IT’s sentient, but IT lashes out at those who perceive IT. IT's incredibly lethal, erases people from memory. SHIT, too many IT references made you aware of IT, now IT is aware of you.`
  
  // notes image template
        const notesImagesArray = [
        "https://raw.githubusercontent.com/lerodriguezreyes/m1p-echoes/main/Images/note1.jpg",

        "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note2.jpg?raw=true",

        "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note3.jpg?raw=true",

        "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/note4.jpg?raw=true",

        "https://github.com/lerodriguezreyes/m1p-echoes/blob/main/Images/plaque.jpg?raw=true"
      ]

      const notesArray = [

        `If something can cross over from conceptual space into reality, taking physical form, then something can cross into the opposite direction. It must be possible to take a physical entity, mechanically extract the idea it embodies, apmplify that idea and broadcast it up into the conceptual space. A bigger idea, an universal code. One designed to fight this thing. ~ ${randomName}`,
        
        `Ok, ok so hear me out. The airlock configuration is not necessarily tied to a 24-hour cycle. If we really wanted to leave early all we have to do is hot start the process. Maube a controlled burst of arcane energy? Maybe a magic word? Ha! I got it:  Open Sesame! ~ ${randomName}`,
    
        `The monsters we are fighting obviously are not natural or real. We took time to dissect a couple before their bodies vanished. Its… strange. They have no organs, no systems. Only teeth, mouths, spiny proyections of bone, teeth, and mouths. Did I say it has teeth? ~ ${randomName}`,
        
        `The protections surrounding the bunker are ingenious. The anti-divination effect is too powerful to maintain indefinitely. So it is only designed to work periodically, say every 24 hours or so. Then the protections slowly recharge over time. That stored energy is then used to power it again. The cycle must obviously be sicronized with whatever is normally preventing us from discovering this bunker hidden in the basement in the first place. ~ ${randomName}`,
        
        `How do you fight an enemy without ever discovering it exists? How do you win without even realizng youre at war? What do we do? ~ ${randomName}`,
    
        ` Ok, so apparently something out there is eating our memories and triying to keep us in the dark. I say to hell with it. Let us use what we have got here and scrap something together to disable the cloak and take the fight to it. We do not really understand what is going on, but maybe we could see what we are missing. Or at least… remember. ~ ${randomName} `,
        
        `I have double checked the wards lining the bunker, and I did not find any evidence of physical, technological or arcane weakening. This is as solid and secure as it gets. Guess we have to wait for the timer to run out… Nope X that idea. The thing is here again, we cannot stay here! Whatever it is, its getting smarter. It is finding us faster. It must be pushing in harder. ~ ${randomName}`
     ] 
    
     const rooms = [ 
      
      // Vault Entrance Room
      new Room (roomDescription, plaqueNote, '', 0, 0),

      // Orb Room
      new Room (roomDescription,"What will you do?", ["Inspect the room",  "Touch the Orb"], 1, 10),

      // Hallway
      new Room (roomDescription, "Will you read on or heed your own counsel?", ["Read the second page", "Keep exploring"], 2, 1),
      
      // Destroyed Laboratory
      new Room (roomDescription, "There's got to be something here to explain what's going on. Will you search this room?", ["Yes","No"], 3, 5),
      
      // Living Cuarters
      new Room (roomDescription, "Investigating is tough work. Will you rest?",["Yes","No"], 4, 20),
  
      // Pristine Laboratory
      new Room (roomDescription, "I'm stuck here, might as well search for something useful. Now where to look...", ["Supply closet", "Chemical stack", "Materials rack"], 5, 5),
       
    ]

/******************************** Timer ********************************/
let time = 300 //game lasts for 300 seconds
let timer;

function startCountdown() {
  let time = 300 
  console.log("timer start");
  let minutes = Math.floor(time / 60).toString().padStart(2, "0");
  let seconds = (time % 60).toString().padStart(2, "0");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  timer = setInterval(() => {
    console.log(time);
     minutes = Math.floor(time / 60).toString().padStart(2, "0");
     seconds = (time % 60).toString().padStart(2, "0");


    time--;
    timeRemainingContainer.innerText = `${minutes}:${seconds}`;

    if (time <= 0) {
      clearInterval();
    }
  }, 1000);

}

/******************************** Life bar ********************************/
playerLifeContainer.style.width = `${playerLife}%`
playerLifeContainer.style.backgroundColor = "red"

/******************************** New Game Instance ********************************/
  // Create a new game
  const game = new Game(rooms, time, playerLife)

/************************************* Room configuration  *************************************/ 
    // TO DO: navLandingToHighScores / navHighScoresToLanding
 
  // vault entrance   
  navLandingToVaultButton.addEventListener('click', () => {
  landingScreen.style.display = 'none';
  landingScreen.style.height = '0p';
  gamePlayScreen.style.display = 'flex';
  console.log("clicking start for vault room");
  
  // image change
  roomImage.src = roomImagesArray[0]
  console.log('image changed');

  // // narrative change  
  // narrativeContainerDiv.innerText = roomDescription[0]
  // console.log('room description loaded')


  //  notesContainerDiv.innerText = plaqueNote

  // room navigation
  navVaultToOrbButton.style.display = 'flex';
  navOrbToHallButton.style.display = 'none';
  navHallToOrbButton.style.display = 'none';
  navHallToRoom1Button.style.display = 'none';
  navHallToRoom2Button.style.display = 'none';
  navHallToRoom3Button.style.display = 'none';
  navRoomToHallButton.style.display = 'none';
  console.log('uneeded buttons hidden')
    })

  // Orb room
  navVaultToOrbButton.addEventListener('click', () => {
  landingScreen.style.display = 'none';
  landingScreen.style.height = '0p';
  gamePlayScreen.style.display = 'flex';
  console.log("clicking start for vault room");
  
  // image change
  roomImage.src = roomImagesArray[1]
  console.log('image changed');

  // // narrative change
  // narrativeContainerDiv.innerText = roomDescription[1]
  // console.log('description changed');

  // start timer
  startCountdown();
  console.log('coundown');


  // room navigation
  navVaultToOrbButton.style.display = 'none';
  navOrbToHallButton.style.display = 'flex';
  navHallToOrbButton.style.display = 'none';
  navHallToRoom1Button.style.display = 'none';
  navHallToRoom2Button.style.display = 'none';
  navHallToRoom3Button.style.display = 'none';
  navRoomToHallButton.style.display = 'none';
  console.log('uneeded buttons hidden')
  
    })
  
  // hall 
  // TO DO: Need to work on the button styling to have them stay in line
  navOrbToHallButton.addEventListener('click', () => {
  landingScreen.style.display = 'none';
  landingScreen.style.height = '0p';
  gamePlayScreen.style.display = 'flex';
  console.log("clicking start for vault room");
  roomImage.src = roomImagesArray[2]
  console.log('image changed');
  navVaultToOrbButton.style.display = 'none';
  navOrbToHallButton.style.display = 'none';
  navHallToOrbButton.style.display = 'flex';
  navHallToRoom1Button.style.display = 'flex';
  navHallToRoom2Button.style.display = 'flex';
  navHallToRoom3Button.style.display = 'flex';
  navRoomToHallButton.style.display = 'none';
  // narrativeContainerDiv.innerText = roomDescription[2]
  console.log('buttons hidden')
    })

    navHallToOrbButton.addEventListener('click', () => {
      landingScreen.style.display = 'none';
      landingScreen.style.height = '0p';
      gamePlayScreen.style.display = 'flex';
      console.log("clicking start for vault room");
      roomImage.src = roomImagesArray[1]
      console.log('image changed');
      navVaultToOrbButton.style.display = 'none';
      navOrbToHallButton.style.display = 'flex';
      navHallToOrbButton.style.display = 'none';
      navHallToRoom1Button.style.display = 'none';
      navHallToRoom2Button.style.display = 'none';
      navHallToRoom3Button.style.display = 'none';
      navRoomToHallButton.style.display = 'none';
      // narrativeContainerDiv.innerText = roomDescription[6]
      console.log('buttons hidden')
        })

  navHallToRoom1Button.addEventListener('click', () => {
    landingScreen.style.display = 'none';
    landingScreen.style.height = '0p';
    gamePlayScreen.style.display = 'flex';
    console.log("clicking start for vault room");
    roomImage.src = roomImagesArray[3]
    console.log('image changed');
    navVaultToOrbButton.style.display = 'none';
    navOrbToHallButton.style.display = 'none';
    navHallToOrbButton.style.display = 'none';
    navHallToRoom1Button.style.display = 'none';
    navHallToRoom2Button.style.display = 'none';
    navHallToRoom3Button.style.display = 'none';
    navRoomToHallButton.style.display = 'flex';
    // narrativeContainerDiv.innerText = roomDescription[5]
    console.log('buttons hidden')
      })

  navHallToRoom2Button.addEventListener('click', () => {
    landingScreen.style.display = 'none';
    landingScreen.style.height = '0p';
    gamePlayScreen.style.display = 'flex';
    console.log("clicking start for vault room");
    roomImage.src = roomImagesArray[4]
    console.log('image changed');
    navVaultToOrbButton.style.display = 'none';
    navOrbToHallButton.style.display = 'none';
    navHallToOrbButton.style.display = 'none';
    navHallToRoom1Button.style.display = 'none';
    navHallToRoom2Button.style.display = 'none';
    navHallToRoom3Button.style.display = 'none';
    navRoomToHallButton.style.display = 'flex';
    // narrativeContainerDiv.innerText = roomDescription[4]
    console.log('buttons hidden')
      })

  navHallToRoom3Button.addEventListener('click', () => {
    landingScreen.style.display = 'none';
    landingScreen.style.height = '0p';
    gamePlayScreen.style.display = 'flex';
    console.log("clicking start for vault room");
    roomImage.src = roomImagesArray[5]
    console.log('image changed');
    navVaultToOrbButton.style.display = 'none';
    navOrbToHallButton.style.display = 'none';
    navHallToOrbButton.style.display = 'none';
    navHallToRoom1Button.style.display = 'none';
    navHallToRoom2Button.style.display = 'none';
    navHallToRoom3Button.style.display = 'none';
    navRoomToHallButton.style.display = 'flex';
    // narrativeContainerDiv.innerText = roomDescription[3]
    console.log('buttons hidden')
    })
    navRoomToHallButton.addEventListener('click', () => {
      landingScreen.style.display = 'none';
      landingScreen.style.height = '0p';
      gamePlayScreen.style.display = 'flex';
      console.log("clicking start for vault room");
      roomImage.src = roomImagesArray[2]
      console.log('image changed');
      navVaultToOrbButton.style.display = 'none';
      navOrbToHallButton.style.display = 'none';
      navHallToOrbButton.style.display = 'flex';
      navHallToRoom1Button.style.display = 'flex';
      navHallToRoom2Button.style.display = 'flex';
      navHallToRoom3Button.style.display = 'flex';
      navRoomToHallButton.style.display = 'none';
      console.log('buttons hidden')
      })

/******************************** Restart Button ********************************/
navRetryButton.addEventListener('click', () => {
  gamePlayScreen.style.display = 'none';
  landingScreen.style.display = 'flex';  
  console.log("clicking to restart.");
  clearInterval()
  console.log("Timer reset")
  console.log('Life Stats reset')
  playerLife = 100
  bossLife = 100
    })

  

}) // end of Index