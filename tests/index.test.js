import { Ship, GameBoard, getShips, isShipCoordinate } from '../src';

test('Ship', () => {
  const s = new Ship(4, [1, 1, 1, 4]);
  s.hit();
  s.hit();
  s.hit();
  s.hit();
  expect(s.length).toBe(4);
  expect(s.position).toEqual([1, 1, 1, 4]);
  expect(s.noOfHits).toBe(4);
  expect(s.isSunk()).toBe(true);
});

test('is ship coordinates', () => {
  expect(isShipCoordinate([1, 1], getShips())).toBe(true);
});

test('game board', () => {
  const g = new GameBoard();
  expect(g.receiveAttack([3, 1])).toBe(true);
  expect(g.receiveAttack([1, 1])).toBe(true);
  expect(g.receiveAttack([2, 1])).toBe(false);
  expect(g.receiveAttack([6, 1])).toBe(false);

  expect(g.shipsSank).toBe(false);
  expect(g.missedShots).toBe();
});
