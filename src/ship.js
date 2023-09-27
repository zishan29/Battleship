export default class Ship {
  constructor(length, position, direction) {
    this.length = length;
    this.direction = direction;
    this.position = position;
    this.noOfHits = 0;
  }

  hit = () => {
    this.noOfHits += 1;
  };

  isSunk = () => {
    if (this.length === this.noOfHits) return true;
    if (this.length > this.noOfHits) return false;
    return true;
  };
}
