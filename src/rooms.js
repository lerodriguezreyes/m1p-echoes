class Narrative {
    
    constructor(roomImage,roomDescription, roomChoices, notes){
        this.roomImage = roomImage;
        this.roomDescription = roomDescription;
        this.roomChoices = roomChoices;
        this.roomImage = roomImage;
        this.notes = notes;
    }

    // shuffleNotes() {
    //     for (let i = this.notes.length - 1; i > 0; i--) { 
    //         const j = Math.floor(Math.random() * (i + 1)); 
    //         [this.notes[i], this.notes[j]] = [this.notes[j], this.notes[i]]; 
    //       } 
    //       return this.choices;
    // }
}