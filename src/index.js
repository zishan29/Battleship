const flipButton = document.querySelector('#flip-button');
const optionContainer = document.querySelector('.option-container');
const gamesBoardContainer = document.querySelector('#gamesboard-container');
const startButton = document.querySelector('#start-button');
const infoDisplay = document.querySelector('#info');
const width = 10;

let angle = 0;
function flip() {
  const optionShips = Array.from(optionContainer.children);
  angle = angle === 0 ? 90 : 0;
  optionShips.forEach((optionShip) => {
    optionShip.style.transform = `rotate(${angle}deg)`;
  });
}
flipButton.addEventListener('click', flip);

function createBoard(color, user) {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.classList.add('game-board');
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;

  for (let i = 0; i < width * width; i += 1) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = i;
    gameBoardContainer.append(block);
  }

  gamesBoardContainer.append(gameBoardContainer);
}

createBoard('transparent', 'player');
createBoard('transparent', 'computer');

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];
let notDropped;

function getValidity(allBoardBlocks, isHorizontal, startIndex, ship) {
  const validStart = isHorizontal
    ? startIndex <= width * width - ship.length
      ? startIndex
      : width * width - ship.length
    : startIndex <= width * width - width * ship.length
    ? startIndex
    : startIndex - ship.length * width + width;

  const shipBlocks = [];

  for (let i = 0; i < ship.length; i += 1) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
    } else {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
    }
  }

  let valid;

  if (isHorizontal) {
    shipBlocks.every(
      (_shipBlock, index) =>
        (valid =
          shipBlocks[0].id % width !==
          width - (shipBlocks.length - (index + 1))),
    );
  } else {
    shipBlocks.every(
      (_shipBlock, index) =>
        (valid = shipBlocks[0].id < 90 + (width * index + 1)),
    );
  }
  const notTaken = shipBlocks.every(
    (shipBlock) => !shipBlock.classList.contains('taken'),
  );

  return { shipBlocks, valid, notTaken };
}

function addShipPiece(user, ship, startId) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`);
  const randomBoolean = Math.random() < 0.5;
  const isHorizontal = user === 'player' ? angle === 0 : randomBoolean;
  const randomStartIndex = Math.floor(Math.random() * (width * width));

  const startIndex = startId || randomStartIndex;

  const { shipBlocks, valid, notTaken } = getValidity(
    allBoardBlocks,
    isHorizontal,
    startIndex,
    ship,
  );

  if (valid && notTaken) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add(ship.name);
      shipBlock.classList.add('taken');
    });
  } else {
    if (user === 'computer') addShipPiece(user, ship, startId);
    if (user === 'player') notDropped = true;
  }
}

function addRandomShipPiece(user, ship, startId) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`);
  const randomBoolean = Math.random() < 0.5;
  const isHorizontal = randomBoolean;
  const randomStartIndex = Math.floor(Math.random() * (width * width));

  const startIndex = startId || randomStartIndex;

  const { shipBlocks, valid, notTaken } = getValidity(
    allBoardBlocks,
    isHorizontal,
    startIndex,
    ship,
  );

  if (valid && notTaken) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add(ship.name);
      shipBlock.classList.add('taken');
    });
  } else {
    addRandomShipPiece(user, ship, startId);
  }
}

ships.forEach((ship) => {
  addShipPiece('computer', ship);
});

let draggedShip;
const allPlayerBlocks = document.querySelectorAll('#player div');
const optionShips = Array.from(optionContainer.children);
const random = document.querySelector('#randomize-button');

random.addEventListener('click', () => {
  if (document.querySelector('.option-container')) {
    document.querySelector('.option-container').remove();
  }
  document.querySelector('#player').remove();
  createBoard('transparent', 'player');
  ships.forEach((ship) => {
    addRandomShipPiece('player', ship);
  });
});

function dragstart(e) {
  notDropped = false;
  draggedShip = e.target;
}

function dragover(e) {
  e.preventDefault();
  const ship = ships[draggedShip.id];
  highlightArea(e.target.id, ship);
}

function dropShip(e) {
  const startId = e.target.id;
  const ship = ships[draggedShip.id];
  addShipPiece('player', ship, startId);
  if (!notDropped) {
    draggedShip.remove();
  }
  if (optionContainer.children.length === 0) {
    document.querySelector('.option-container').remove();
  }
}

allPlayerBlocks.forEach((playerBlock) => {
  playerBlock.addEventListener('dragover', dragover);
  playerBlock.addEventListener('drop', dropShip);
});

optionShips.forEach((optionShip) =>
  optionShip.addEventListener('dragstart', dragstart),
);

function highlightArea(startIndex, ship) {
  const allBoardBlocks = document.querySelectorAll('#player div');
  const isHorizontal = angle === 0;

  const { shipBlocks, valid, notTaken } = getValidity(
    allBoardBlocks,
    isHorizontal,
    startIndex,
    ship,
  );

  if (valid && notTaken) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add('hover');
      setTimeout(() => shipBlock.classList.remove('hover'), 500);
    });
  }
}

let gameOver = false;
let playerTurn;
let playerHits = [];
let computerHits = [];
const playerSunkShips = [];
const computerSunkShips = [];

function checkScore(user, userHits, userSunkShips) {
  function checkShip(shipName, shipLength) {
    if (
      userHits.filter((storedShipName) => storedShipName === shipName)
        .length === shipLength
    ) {
      if (user === 'player') {
        playerHits = userHits.filter(
          (storedShipName) => storedShipName !== shipName,
        );
      }
      if (user === 'computer') {
        computerHits = userHits.filter(
          (storedShipName) => storedShipName !== shipName,
        );
      }
      userSunkShips.push(shipName);
    }
  }

  checkShip('destroyer', 2);
  checkShip('submarine', 3);
  checkShip('cruiser', 3);
  checkShip('battleship', 4);
  checkShip('carrier', 5);

  if (playerSunkShips.length === 5) {
    infoDisplay.textContent = 'You WON!';
    gameOver = true;
  }
  if (computerSunkShips.length === 5) {
    infoDisplay.textContent = 'Opponent WON!';
    gameOver = true;
  }
}

function computerGo() {
  if (!gameOver) {
    infoDisplay.textContent = "Opponent's turn, please wait.";
    setTimeout(() => {
      const randomGo = Math.floor(Math.random() * width * width);
      const allBoardBlocks = document.querySelectorAll('#player div');
      if (
        allBoardBlocks[randomGo].classList.contains('taken') &&
        allBoardBlocks[randomGo].classList.contains('boom')
      ) {
        computerGo();
      } else if (
        allBoardBlocks[randomGo].classList.contains('taken') &&
        !allBoardBlocks[randomGo].classList.contains('boom')
      ) {
        allBoardBlocks[randomGo].classList.add('boom');
        let classes = Array.from(allBoardBlocks[randomGo].classList);
        classes = classes.filter((className) => className !== 'block');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'taken');
        computerHits.push(...classes);
        checkScore('computer', computerHits, computerSunkShips);
      } else {
        allBoardBlocks[randomGo].classList.add('empty');
      }
    }, 500);

    setTimeout(() => {
      playerTurn = true;
      infoDisplay.textContent = 'Your turn.';
      const allBoardBlocks = document.querySelectorAll('#computer div');
      allBoardBlocks.forEach((block) =>
        block.addEventListener('click', handleClick),
      );
    }, 1000);
  }
}

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains('taken')) {
      e.target.classList.add('boom');
      let classes = Array.from(e.target.classList);
      classes = classes.filter((className) => className !== 'block');
      classes = classes.filter((className) => className !== 'boom');
      classes = classes.filter((className) => className !== 'taken');
      playerHits.push(...classes);
      checkScore('player', playerHits, playerSunkShips);
    }
    if (!e.target.classList.contains('taken')) {
      e.target.classList.add('empty');
    }
    playerTurn = false;
    const allBoardBlocks = document.querySelectorAll('#computer div');
    allBoardBlocks.forEach((block) => block.replaceWith(block.cloneNode(true)));
    setTimeout(computerGo, 500);
  }
}

function startGame() {
  if (playerTurn === undefined) {
    if (
      optionContainer.children.length !== 0 &&
      document.querySelector('.option-container') !== null
    ) {
      infoDisplay.textContent = 'Place the ships.';
    } else {
      document.querySelector('#buttons').style.visibility = 'hidden';
      const allBoardBlocks = document.querySelectorAll('#computer div');
      allBoardBlocks.forEach((block) =>
        block.addEventListener('click', handleClick),
      );
      playerTurn = true;
      infoDisplay.textContent = 'The game has started, your turn.';
    }
  }
}

startButton.addEventListener('click', startGame);
