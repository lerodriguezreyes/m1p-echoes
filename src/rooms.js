class Narrative {
    constructor(introduction, decision, choice, room){
        this.introduction = introduction;
        this.decision = decision;
        this.choice = choice;
        this.room = room;
    }
    
    constructor (roomImage,lifeRemaining,timeLimit,timeRemaining, narrativeContent, choice, notes,){

    }
}
getNotes(){
    return this.notes[this.currentNotesIndex];
}

shuffleNotes() {
    for (let i = this.notes.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [this.notes[i], this.notes[j]] = [this.notes[j], this.notes[i]]; 
        } 
        return this.notes; 
    }


        /* choices and checks yet to be programed
orb room:

if(choice)









        */
    
