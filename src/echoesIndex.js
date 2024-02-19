document.addEventListener("DOMContentLoaded", () =>{


/******************************** Constant variables ********************************/
const time = 300 //game lasts for 300 seconds

/************  Html views  ************/
  // View divs
const landingPage = document.querySelector("#landingPage");
const highScores = document.querySelector("#highScores");
const gameScreen = document.querySelector("#roomGamePlay");

  // Game view elements
const lifeBarProgress = document.querySelector("#lifeBarProgress");
const timeRemaining = document.querySelector("#timeRemaining");
const navigationButtonStart = document.querySelector("#navigationButtonStart");
const navigationButtonRetry = document.querySelector("#navigationButtonRetry");
const navigationButtonGoBack = document.querySelector("#navigationButtonGoBack");
const navigationButtonProceed = document.querySelector("#navigationButtonProceed");


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


// scenarios array

const roomDescription = {
    vault: "You are part of an organization dedicated to protecting mankind against all threats. Both known and unknown, yet now a days the threats are more... mundane in nature. During your turn of strongly encouraged and by no means forced asistance in taking stock of the supplies, you find a door you've never seen before. You decide to open it and find yourself in front of an intricate vault door. Next to it you see a tarnished plaque.",
    
    orb: "Upon entering the vault, you find yourself in a 15 by 15 foot open chamber where a glowing orb sits atop a pedestal in the center. Suddendly the massive door behind you slams shut.",

    hall: "You end up in a long hallway dimly lit by flickering lights dangling from the ceeling and ensconed in the very foundation of the building. Up ahead you see 3 doors marked with notes. At your right you spot a bowie knife pinning 2 loose sheets of paper. The handwriting on the paper seems familiar.",

    livingCuarters: "You find yourself in an inmaculately clean room featuring tables with chairs, desks, neatly made beds and a nearly empty closet. You may rest here if you wish.",
    
    laboratoryDestroyed: "This expansive room once served as a laboratory. It has clearly seen better days. The walls are marred with ash and scorch marks. All of the equipment is strewn across the benches haphazarly. Amidst the caos, you find a broken chest that holds a relatively intact note. It is encrypted.",
    
    laboratoryPristine: "This room looks nearly identical to the other, save for the fact that there are no burn marks and the equipment is intact. The supplies here range from weapon components, to munitions, to chemicals and biological specimens.",
    
    bossBattle: "Armed with knoledge, you gaze into the abyss and await to confront another monster. You yell into the darknes: Unknown Horror come face me, if you dare! Next to you a grayish green portal opens.",

    victory: "After defeating the unknown horror, the vault door opens. Instead of returning to the organization's workspace, you find yourself greeted by Dusting in front of another vault door. You think to yourself, I guess there's no rest for the wicked."
}

const roomChoices = [ 
    new Narrative ("What will you do?", ["Inspect the room",  "Touch the Orb"], eventResult, 1), 
    
    new Narrative ("Will you read on or heed your own counsel?", ["Read the second page", "Keep on exploring"], eventResult, 2),
    
    new Narrative ("Investigating is tough work. Will you rest?", ["Yes","No"], eventResult, 3),
        
    new Narrative ("Its dangerous to go outside. Take one of these: ", ["An antimatter sword","An energy-displacing buckler"], eventResult, 4),
]


// narrative bits

currentPlayer = []

const players = ["Celiel", "Dalton", "Daniel", "Emely", "Luis", "Jaser", "Joel", "John", "Jonathan", "Juan", "Jose", "Kenneth", "Kevin", "Naiomy", "Roxangelica", "Shannon"] 

const plaqueNote = 'Fellow hunters, I understand this situation may be unsettling. However, it is vital that you heed my instructions to the best of your abilities. Regrettably, I cannot provide further details, it could endanger us all. Rest assured; we are embarking on a hunt for the most dangerous quarry our organization has ever faced. More information awaits within the containment chamber. Upon ingress, the doors will seal behind you. You will be contained inside until the sequence automatically initiates 24 hours later. It is imperative not to overlook this timeframe. Refrain from bringing more rations than necessary for the allotted hours. Lastly, under no circumstances should you take anything out of the containment vault. Wishing you all the best of luck. Your mentor, Dustin.'

const hallnote = `Hi me. Yeah, this is weird. I’m taking to myself via letters here. It’s a shitty situation. If it’s any consolation this is not the first time you’ve been here! As best as we gather, this has happened before. Hell, I’d bet it’s been going on ever since ol’ Dusty disappeared. This place contains a ancient secret we are fighting. The warning's real; we’re picking up Dustin's slack after he went on break and never came back. So yeah, we’re stuck here trying to bootstrap a solution from remains and stuff we’ve cobbled up together. We're so close to figuring this out. The next page contains the details of the threat but DON’T READ IT YET. Explore and form your own opinions. With love, from me to me ${currentPlayer}.`

const hallNote2 = `Want to know a secret? Daniel told me once this place isn’t really a containment vault. It’s a shelter. The threat is outside, somewhere… We are assuming the worst-case scenario: whatever’s out there is omniscient. This vault might be the only place in creation IT can’t directly see into. Somehow, it messes with people’s memories. It’s not really invisible; it’s protected by some kind of obfuscation array. That might be for the best, since once you see it, it can also see you. The more you learn about it, the better it can find you. Yeah, it’s the abyss that looks back at you. I’m afraid that giving it a name might escalate things so I’m going to keep it vague. I don’t think it’s sentient, but it lashes out at those who perceive it. It’s incredibly lethal, erases people from memory. SHIT I now notice that I messed up, it knows you are aware of it and so IT is of you. Quick, go to the …. [unreadable].`

const NotesArray = [
    `If something can cross over from conceptual space into reality, taking physical form, then something can cross into the opposite direction. It must be possible to take a physical entity, mechanically extract the idea it embodies, apmplify that idea and broadcast it up into the conceptual space. A bigger idea, an universal code. One designed to fight this thing. ~ ${otherPlayername}`,
    
    `Ok, ok so hear me out. The airlock configuration is not necessarily tied to a 24-hour cycle. If we really wanted to leave early all we have to do is hot start the process. Maube a controlled burst of arcane energy? Maybe a magic word? Ha! I got it:  Open Sesame! ~ ${otherPlayername}`,

    `The monsters we are fighting obviously are not natural or real. We took time to dissect a couple before their bodies vanished. Its… strange. They have no organs, no systems. Only teeth, mouths, spiny proyections of bone, teeth, and mouths. Did I say it has teeth? ~ ${otherPlayername}`,
    
    `The protections surrounding the bunker are ingenious. The anti-divination effect is too powerful to maintain indefinitely. So it is only designed to work periodically, say every 24 hours or so. Then the protections slowly recharge over time. That stored energy is then used to power it again. The cycle must obviously be sicronized with whatever is normally preventing us from discovering this bunker hidden in the basement in the first place. ~ ${otherPlayername}`,
    
    `How do you fight an enemy without ever discovering it exists? How do you win without even realizng youre at war? What do we do? ~ ${otherPlayername}`,

    ` Ok, so apparently something out there is eating our memories and triying to keep us in the dark. I say to hell with it. Let us use what we have got here and scrap something together to disable the cloak and take the fight to it. We do not really understand what is going on, but maybe we could see what we are missing. Or at least… remember. ~ ${otherPlayername} `,
    
    `I have double checked the wards lining the bunker, and I did not find any evidence of physical, technological or arcane weakening. This is as solid and secure as it gets. Guess we have to wait for the timer to run out… Nope X that idea. The thing is here again, we cannot stay here! Whatever it is, its getting smarter. It is finding us faster. It must be pushing in harder. ~ ${otherPlayername}`
] 



/******************************** Timer ********************************/

startCountdown();

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
    timeRemainingContainer.innerText = `${minutes}:${seconds}`;  }

// Enable music and loop the track
let vid = document.getElementById("music");
vid.preload = "auto";
vid.loop = true;


})