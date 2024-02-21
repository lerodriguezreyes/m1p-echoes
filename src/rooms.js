class Room {
  constructor(roomDescription, roomChoices, playerChoice, currentPosition, dc) {
    this.roomDescription = roomDescription;
    this.roomChoices = roomChoices;
    this.playerChoice = playerChoice;
    this.dc = dc;
    this.currentPosition = currentPosition;
  }

  getRoomDescription() {
    return this.roomDescription[currentPosition];
  }

  getRoomChoices() {
    return this.roomChoices[currentPosition];
  }

  getRoomChoices() {
    return this.playerChoice[currentPosition];
  }

  getDc() {
    return this.dc[currentPosition];
  }
}
