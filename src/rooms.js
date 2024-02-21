class Room {
  constructor(roomDescription, roomChoices, playerChoice, dc, roomIndex) {
    this.roomDescription = roomDescription[this.roomIndex];
    this.roomChoices = roomChoices[this.roomIndex];
    this.playerChoice = playerChoice;
    this.dc = dc;
    this.roomIndex = 0
  }
}