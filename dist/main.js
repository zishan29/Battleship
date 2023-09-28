/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\nconst gamesBoardContainer = document.querySelector('#gamesboard-container');\nconst width = 10;\n\nfunction createBoard(color, user) {\n  const gameBoardContainer = document.createElement('div');\n  gameBoardContainer.classList.add('game-board');\n  gameBoardContainer.style.backgroundColor = color;\n  gameBoardContainer.id = user;\n\n  for (let i = 0; i < width * width; i += 1) {\n    const block = document.createElement('div');\n    block.classList.add('block');\n    block.id = i;\n    gameBoardContainer.append(block);\n  }\n\n  gamesBoardContainer.append(gameBoardContainer);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JpZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ncmlkLmpzP2M4OGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZXNCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lc2JvYXJkLWNvbnRhaW5lcicpO1xuY29uc3Qgd2lkdGggPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoY29sb3IsIHVzZXIpIHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lLWJvYXJkJyk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmlkID0gdXNlcjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoICogd2lkdGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBibG9jay5pZCA9IGk7XG4gICAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZChibG9jayk7XG4gIH1cblxuICBnYW1lc0JvYXJkQ29udGFpbmVyLmFwcGVuZChnYW1lQm9hcmRDb250YWluZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/grid.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst flipButton = document.querySelector('#flip-button');\nconst optionContainer = document.querySelector('.option-container');\nconst startButton = document.querySelector('#start-button');\nconst infoDisplay = document.querySelector('#info');\nconst turnDisplay = document.querySelector('#turn-display');\nconst width = 10;\n\nlet angle = 0;\nfunction flip() {\n  const optionShips = Array.from(optionContainer.children);\n  angle = angle === 0 ? 90 : 0;\n  optionShips.forEach((optionShip) => {\n    optionShip.style.transform = `rotate(${angle}deg)`;\n  });\n}\nflipButton.addEventListener('click', flip);\n\n(0,_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('transparent', 'player');\n(0,_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('transparent', 'computer');\n\nconst destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('destroyer', 2);\nconst submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('submarine', 3);\nconst cruiser = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('cruiser', 3);\nconst battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('battleship', 4);\nconst carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('carrier', 5);\n\nconst ships = [destroyer, submarine, cruiser, battleship, carrier];\nlet notDropped;\n\nfunction getValidity(allBoardBlocks, isHorizontal, startIndex, ship) {\n  const validStart = isHorizontal\n    ? startIndex <= width * width - ship.length\n      ? startIndex\n      : width * width - ship.length\n    : startIndex <= width * width - width * ship.length\n    ? startIndex\n    : startIndex - ship.length * width + width;\n\n  const shipBlocks = [];\n\n  for (let i = 0; i < ship.length; i += 1) {\n    if (isHorizontal) {\n      shipBlocks.push(allBoardBlocks[Number(validStart) + i]);\n    } else {\n      shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);\n    }\n  }\n\n  let valid;\n\n  if (isHorizontal) {\n    shipBlocks.every(\n      (_shipBlock, index) =>\n        (valid =\n          shipBlocks[0].id % width !==\n          width - (shipBlocks.length - (index + 1))),\n    );\n  } else {\n    shipBlocks.every(\n      (_shipBlock, index) =>\n        (valid = shipBlocks[0].id < 90 + (width * index + 1)),\n    );\n  }\n  const notTaken = shipBlocks.every(\n    (shipBlock) => !shipBlock.classList.contains('taken'),\n  );\n\n  return { shipBlocks, valid, notTaken };\n}\n\nfunction addShipPiece(user, ship, startId) {\n  const allBoardBlocks = document.querySelectorAll(`#${user} div`);\n  const randomBoolean = Math.random() < 0.5;\n  const isHorizontal = user === 'player' ? angle === 0 : randomBoolean;\n  const randomStartIndex = Math.floor(Math.random() * (width * width));\n\n  const startIndex = startId || randomStartIndex;\n\n  const { shipBlocks, valid, notTaken } = getValidity(\n    allBoardBlocks,\n    isHorizontal,\n    startIndex,\n    ship,\n  );\n\n  if (valid && notTaken) {\n    shipBlocks.forEach((shipBlock) => {\n      shipBlock.classList.add(ship.name);\n      shipBlock.classList.add('taken');\n    });\n  } else {\n    if (user === 'computer') addShipPiece(user, ship, startId);\n    if (user === 'player') notDropped = true;\n  }\n}\n\nfunction addRandomShipPiece(user, ship, startId) {\n  const allBoardBlocks = document.querySelectorAll(`#${user} div`);\n  const randomBoolean = Math.random() < 0.5;\n  const isHorizontal = randomBoolean;\n  const randomStartIndex = Math.floor(Math.random() * (width * width));\n\n  const startIndex = startId || randomStartIndex;\n\n  const { shipBlocks, valid, notTaken } = getValidity(\n    allBoardBlocks,\n    isHorizontal,\n    startIndex,\n    ship,\n  );\n\n  if (valid && notTaken) {\n    shipBlocks.forEach((shipBlock) => {\n      shipBlock.classList.add(ship.name);\n      shipBlock.classList.add('taken');\n    });\n  } else {\n    addRandomShipPiece(user, ship, startId);\n  }\n}\n\nships.forEach((ship) => {\n  addShipPiece('computer', ship);\n});\n\nlet draggedShip;\nconst allPlayerBlocks = document.querySelectorAll('#player div');\nconst optionShips = Array.from(optionContainer.children);\nconst random = document.querySelector('#randomize-button');\n\nrandom.addEventListener('click', () => {\n  if (document.querySelector('.option-container')) {\n    document.querySelector('.option-container').remove();\n  }\n  document.querySelector('#player').remove();\n  (0,_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('transparent', 'player');\n  ships.forEach((ship) => {\n    addRandomShipPiece('player', ship);\n  });\n});\n\nfunction dragstart(e) {\n  notDropped = false;\n  draggedShip = e.target;\n}\n\nfunction dragover(e) {\n  e.preventDefault();\n  const ship = ships[draggedShip.id];\n  highlightArea(e.target.id, ship);\n}\n\nfunction dropShip(e) {\n  const startId = e.target.id;\n  const ship = ships[draggedShip.id];\n  addShipPiece('player', ship, startId);\n  if (!notDropped) {\n    draggedShip.remove();\n  }\n  if (optionContainer.children.length === 0) {\n    document.querySelector('.option-container').remove();\n  }\n}\n\nallPlayerBlocks.forEach((playerBlock) => {\n  playerBlock.addEventListener('dragover', dragover);\n  playerBlock.addEventListener('drop', dropShip);\n});\n\noptionShips.forEach((optionShip) =>\n  optionShip.addEventListener('dragstart', dragstart),\n);\n\nfunction highlightArea(startIndex, ship) {\n  const allBoardBlocks = document.querySelectorAll('#player div');\n  const isHorizontal = angle === 0;\n\n  const { shipBlocks, valid, notTaken } = getValidity(\n    allBoardBlocks,\n    isHorizontal,\n    startIndex,\n    ship,\n  );\n\n  if (valid && notTaken) {\n    shipBlocks.forEach((shipBlock) => {\n      shipBlock.classList.add('hover');\n      setTimeout(() => shipBlock.classList.remove('hover'), 500);\n    });\n  }\n}\n\nlet gameOver = false;\nlet playerTurn;\nlet playerHits = [];\nlet computerHits = [];\nconst playerSunkShips = [];\nconst computerSunkShips = [];\n\nfunction checkScore(user, userHits, userSunkShips) {\n  function checkShip(shipName, shipLength) {\n    if (\n      userHits.filter((storedShipName) => storedShipName === shipName)\n        .length === shipLength\n    ) {\n      if (user === 'player') {\n        infoDisplay.textContent = `you sunk the Computer's ${shipName}`;\n        playerHits = userHits.filter(\n          (storedShipName) => storedShipName !== shipName,\n        );\n      }\n      if (user === 'computer') {\n        infoDisplay.textContent = `The computer sunk your ${shipName}`;\n        computerHits = userHits.filter(\n          (storedShipName) => storedShipName !== shipName,\n        );\n      }\n      userSunkShips.push(shipName);\n    }\n  }\n\n  checkShip('destroyer', 2);\n  checkShip('submarine', 3);\n  checkShip('cruiser', 3);\n  checkShip('battleship', 4);\n  checkShip('carrier', 5);\n\n  if (playerSunkShips.length === 5) {\n    infoDisplay.textContent = 'you sunk all the computer ships. You WON!';\n    gameOver = true;\n  }\n  if (computerSunkShips.length === 5) {\n    infoDisplay.textContent = 'The computer has sunk all your ships. You LOST!';\n    gameOver = true;\n  }\n}\n\nfunction computerGo() {\n  if (!gameOver) {\n    turnDisplay.textContent = 'Computers Go!';\n    infoDisplay.textContent = 'The computer is Thinking...';\n    setTimeout(() => {\n      const randomGo = Math.floor(Math.random() * width * width);\n      const allBoardBlocks = document.querySelectorAll('#player div');\n      if (\n        allBoardBlocks[randomGo].classList.contains('taken') &&\n        allBoardBlocks[randomGo].classList.contains('boom')\n      ) {\n        computerGo();\n      } else if (\n        allBoardBlocks[randomGo].classList.contains('taken') &&\n        !allBoardBlocks[randomGo].classList.contains('boom')\n      ) {\n        allBoardBlocks[randomGo].classList.add('boom');\n        infoDisplay.textContent = 'The computer hit your ship!';\n        let classes = Array.from(allBoardBlocks[randomGo].classList);\n        classes = classes.filter((className) => className !== 'block');\n        classes = classes.filter((className) => className !== 'boom');\n        classes = classes.filter((className) => className !== 'taken');\n        computerHits.push(...classes);\n        checkScore('computer', computerHits, computerSunkShips);\n      } else {\n        infoDisplay.textContent = 'Nothing hit this time.';\n        allBoardBlocks[randomGo].classList.add('empty');\n      }\n    }, 2000);\n\n    setTimeout(() => {\n      playerTurn = true;\n      turnDisplay.textContent = 'Your Go!';\n      infoDisplay.textContent = 'Please take your go.';\n      const allBoardBlocks = document.querySelectorAll('#computer div');\n      allBoardBlocks.forEach((block) =>\n        block.addEventListener('click', handleClick),\n      );\n    }, 4000);\n  }\n}\n\nfunction handleClick(e) {\n  if (!gameOver) {\n    if (e.target.classList.contains('taken')) {\n      e.target.classList.add('boom');\n      infoDisplay.textContent = 'You hit the computers ship!';\n      let classes = Array.from(e.target.classList);\n      classes = classes.filter((className) => className !== 'block');\n      classes = classes.filter((className) => className !== 'boom');\n      classes = classes.filter((className) => className !== 'taken');\n      playerHits.push(...classes);\n      checkScore('player', playerHits, playerSunkShips);\n    }\n    if (!e.target.classList.contains('taken')) {\n      infoDisplay.textContent = 'Nothing hit this time.';\n      e.target.classList.add('empty');\n    }\n    playerTurn = false;\n    const allBoardBlocks = document.querySelectorAll('#computer div');\n    allBoardBlocks.forEach((block) => block.replaceWith(block.cloneNode(true)));\n    setTimeout(computerGo, 2000);\n  }\n}\n\nfunction startGame() {\n  if (playerTurn === undefined) {\n    if (\n      optionContainer.children.length !== 0 &&\n      document.querySelector('.option-container') !== null\n    ) {\n      infoDisplay.textContent = 'Please place all your ships first!';\n    } else {\n      document.querySelector('#buttons').style.visibility = 'hidden';\n      const allBoardBlocks = document.querySelectorAll('#computer div');\n      allBoardBlocks.forEach((block) =>\n        block.addEventListener('click', handleClick),\n      );\n      playerTurn = true;\n      turnDisplay.textContent = 'Your Go!';\n      infoDisplay.textContent = 'The game has started!';\n    }\n  }\n}\n\nstartButton.addEventListener('click', startGame);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDO0FBQ1A7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQsR0FBRztBQUNIO0FBQ0E7O0FBRUEsaURBQVc7QUFDWCxpREFBVzs7QUFFWCxzQkFBc0IsNkNBQUk7QUFDMUIsc0JBQXNCLDZDQUFJO0FBQzFCLG9CQUFvQiw2Q0FBSTtBQUN4Qix1QkFBdUIsNkNBQUk7QUFDM0Isb0JBQW9CLDZDQUFJOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLHVEQUF1RCxNQUFNO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxNQUFNO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVc7QUFDYjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFNBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBmbGlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZsaXAtYnV0dG9uJyk7XG5jb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWNvbnRhaW5lcicpO1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnV0dG9uJyk7XG5jb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvJyk7XG5jb25zdCB0dXJuRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuLWRpc3BsYXknKTtcbmNvbnN0IHdpZHRoID0gMTA7XG5cbmxldCBhbmdsZSA9IDA7XG5mdW5jdGlvbiBmbGlwKCkge1xuICBjb25zdCBvcHRpb25TaGlwcyA9IEFycmF5LmZyb20ob3B0aW9uQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgYW5nbGUgPSBhbmdsZSA9PT0gMCA/IDkwIDogMDtcbiAgb3B0aW9uU2hpcHMuZm9yRWFjaCgob3B0aW9uU2hpcCkgPT4ge1xuICAgIG9wdGlvblNoaXAuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2FuZ2xlfWRlZylgO1xuICB9KTtcbn1cbmZsaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwKTtcblxuY3JlYXRlQm9hcmQoJ3RyYW5zcGFyZW50JywgJ3BsYXllcicpO1xuY3JlYXRlQm9hcmQoJ3RyYW5zcGFyZW50JywgJ2NvbXB1dGVyJyk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKCdkZXN0cm95ZXInLCAyKTtcbmNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbmNvbnN0IGNydWlzZXIgPSBuZXcgU2hpcCgnY3J1aXNlcicsIDMpO1xuY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG5jb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoJ2NhcnJpZXInLCA1KTtcblxuY29uc3Qgc2hpcHMgPSBbZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXJdO1xubGV0IG5vdERyb3BwZWQ7XG5cbmZ1bmN0aW9uIGdldFZhbGlkaXR5KGFsbEJvYXJkQmxvY2tzLCBpc0hvcml6b250YWwsIHN0YXJ0SW5kZXgsIHNoaXApIHtcbiAgY29uc3QgdmFsaWRTdGFydCA9IGlzSG9yaXpvbnRhbFxuICAgID8gc3RhcnRJbmRleCA8PSB3aWR0aCAqIHdpZHRoIC0gc2hpcC5sZW5ndGhcbiAgICAgID8gc3RhcnRJbmRleFxuICAgICAgOiB3aWR0aCAqIHdpZHRoIC0gc2hpcC5sZW5ndGhcbiAgICA6IHN0YXJ0SW5kZXggPD0gd2lkdGggKiB3aWR0aCAtIHdpZHRoICogc2hpcC5sZW5ndGhcbiAgICA/IHN0YXJ0SW5kZXhcbiAgICA6IHN0YXJ0SW5kZXggLSBzaGlwLmxlbmd0aCAqIHdpZHRoICsgd2lkdGg7XG5cbiAgY29uc3Qgc2hpcEJsb2NrcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIHNoaXBCbG9ja3MucHVzaChhbGxCb2FyZEJsb2Nrc1tOdW1iZXIodmFsaWRTdGFydCkgKyBpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBCbG9ja3MucHVzaChhbGxCb2FyZEJsb2Nrc1tOdW1iZXIodmFsaWRTdGFydCkgKyBpICogd2lkdGhdKTtcbiAgICB9XG4gIH1cblxuICBsZXQgdmFsaWQ7XG5cbiAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgIHNoaXBCbG9ja3MuZXZlcnkoXG4gICAgICAoX3NoaXBCbG9jaywgaW5kZXgpID0+XG4gICAgICAgICh2YWxpZCA9XG4gICAgICAgICAgc2hpcEJsb2Nrc1swXS5pZCAlIHdpZHRoICE9PVxuICAgICAgICAgIHdpZHRoIC0gKHNoaXBCbG9ja3MubGVuZ3RoIC0gKGluZGV4ICsgMSkpKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHNoaXBCbG9ja3MuZXZlcnkoXG4gICAgICAoX3NoaXBCbG9jaywgaW5kZXgpID0+XG4gICAgICAgICh2YWxpZCA9IHNoaXBCbG9ja3NbMF0uaWQgPCA5MCArICh3aWR0aCAqIGluZGV4ICsgMSkpLFxuICAgICk7XG4gIH1cbiAgY29uc3Qgbm90VGFrZW4gPSBzaGlwQmxvY2tzLmV2ZXJ5KFxuICAgIChzaGlwQmxvY2spID0+ICFzaGlwQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpLFxuICApO1xuXG4gIHJldHVybiB7IHNoaXBCbG9ja3MsIHZhbGlkLCBub3RUYWtlbiB9O1xufVxuXG5mdW5jdGlvbiBhZGRTaGlwUGllY2UodXNlciwgc2hpcCwgc3RhcnRJZCkge1xuICBjb25zdCBhbGxCb2FyZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3VzZXJ9IGRpdmApO1xuICBjb25zdCByYW5kb21Cb29sZWFuID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgY29uc3QgaXNIb3Jpem9udGFsID0gdXNlciA9PT0gJ3BsYXllcicgPyBhbmdsZSA9PT0gMCA6IHJhbmRvbUJvb2xlYW47XG4gIGNvbnN0IHJhbmRvbVN0YXJ0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2lkdGggKiB3aWR0aCkpO1xuXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSBzdGFydElkIHx8IHJhbmRvbVN0YXJ0SW5kZXg7XG5cbiAgY29uc3QgeyBzaGlwQmxvY2tzLCB2YWxpZCwgbm90VGFrZW4gfSA9IGdldFZhbGlkaXR5KFxuICAgIGFsbEJvYXJkQmxvY2tzLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBzdGFydEluZGV4LFxuICAgIHNoaXAsXG4gICk7XG5cbiAgaWYgKHZhbGlkICYmIG5vdFRha2VuKSB7XG4gICAgc2hpcEJsb2Nrcy5mb3JFYWNoKChzaGlwQmxvY2spID0+IHtcbiAgICAgIHNoaXBCbG9jay5jbGFzc0xpc3QuYWRkKHNoaXAubmFtZSk7XG4gICAgICBzaGlwQmxvY2suY2xhc3NMaXN0LmFkZCgndGFrZW4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodXNlciA9PT0gJ2NvbXB1dGVyJykgYWRkU2hpcFBpZWNlKHVzZXIsIHNoaXAsIHN0YXJ0SWQpO1xuICAgIGlmICh1c2VyID09PSAncGxheWVyJykgbm90RHJvcHBlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUmFuZG9tU2hpcFBpZWNlKHVzZXIsIHNoaXAsIHN0YXJ0SWQpIHtcbiAgY29uc3QgYWxsQm9hcmRCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt1c2VyfSBkaXZgKTtcbiAgY29uc3QgcmFuZG9tQm9vbGVhbiA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbUJvb2xlYW47XG4gIGNvbnN0IHJhbmRvbVN0YXJ0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2lkdGggKiB3aWR0aCkpO1xuXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSBzdGFydElkIHx8IHJhbmRvbVN0YXJ0SW5kZXg7XG5cbiAgY29uc3QgeyBzaGlwQmxvY2tzLCB2YWxpZCwgbm90VGFrZW4gfSA9IGdldFZhbGlkaXR5KFxuICAgIGFsbEJvYXJkQmxvY2tzLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBzdGFydEluZGV4LFxuICAgIHNoaXAsXG4gICk7XG5cbiAgaWYgKHZhbGlkICYmIG5vdFRha2VuKSB7XG4gICAgc2hpcEJsb2Nrcy5mb3JFYWNoKChzaGlwQmxvY2spID0+IHtcbiAgICAgIHNoaXBCbG9jay5jbGFzc0xpc3QuYWRkKHNoaXAubmFtZSk7XG4gICAgICBzaGlwQmxvY2suY2xhc3NMaXN0LmFkZCgndGFrZW4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRSYW5kb21TaGlwUGllY2UodXNlciwgc2hpcCwgc3RhcnRJZCk7XG4gIH1cbn1cblxuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICBhZGRTaGlwUGllY2UoJ2NvbXB1dGVyJywgc2hpcCk7XG59KTtcblxubGV0IGRyYWdnZWRTaGlwO1xuY29uc3QgYWxsUGxheWVyQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllciBkaXYnKTtcbmNvbnN0IG9wdGlvblNoaXBzID0gQXJyYXkuZnJvbShvcHRpb25Db250YWluZXIuY2hpbGRyZW4pO1xuY29uc3QgcmFuZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWl6ZS1idXR0b24nKTtcblxucmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbi1jb250YWluZXInKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcicpLnJlbW92ZSgpO1xuICBjcmVhdGVCb2FyZCgndHJhbnNwYXJlbnQnLCAncGxheWVyJyk7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBhZGRSYW5kb21TaGlwUGllY2UoJ3BsYXllcicsIHNoaXApO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBkcmFnc3RhcnQoZSkge1xuICBub3REcm9wcGVkID0gZmFsc2U7XG4gIGRyYWdnZWRTaGlwID0gZS50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdvdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzaGlwID0gc2hpcHNbZHJhZ2dlZFNoaXAuaWRdO1xuICBoaWdobGlnaHRBcmVhKGUudGFyZ2V0LmlkLCBzaGlwKTtcbn1cblxuZnVuY3Rpb24gZHJvcFNoaXAoZSkge1xuICBjb25zdCBzdGFydElkID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IHNoaXAgPSBzaGlwc1tkcmFnZ2VkU2hpcC5pZF07XG4gIGFkZFNoaXBQaWVjZSgncGxheWVyJywgc2hpcCwgc3RhcnRJZCk7XG4gIGlmICghbm90RHJvcHBlZCkge1xuICAgIGRyYWdnZWRTaGlwLnJlbW92ZSgpO1xuICB9XG4gIGlmIChvcHRpb25Db250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbi1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgfVxufVxuXG5hbGxQbGF5ZXJCbG9ja3MuZm9yRWFjaCgocGxheWVyQmxvY2spID0+IHtcbiAgcGxheWVyQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3Zlcik7XG4gIHBsYXllckJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wU2hpcCk7XG59KTtcblxub3B0aW9uU2hpcHMuZm9yRWFjaCgob3B0aW9uU2hpcCkgPT5cbiAgb3B0aW9uU2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpLFxuKTtcblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXJlYShzdGFydEluZGV4LCBzaGlwKSB7XG4gIGNvbnN0IGFsbEJvYXJkQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllciBkaXYnKTtcbiAgY29uc3QgaXNIb3Jpem9udGFsID0gYW5nbGUgPT09IDA7XG5cbiAgY29uc3QgeyBzaGlwQmxvY2tzLCB2YWxpZCwgbm90VGFrZW4gfSA9IGdldFZhbGlkaXR5KFxuICAgIGFsbEJvYXJkQmxvY2tzLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBzdGFydEluZGV4LFxuICAgIHNoaXAsXG4gICk7XG5cbiAgaWYgKHZhbGlkICYmIG5vdFRha2VuKSB7XG4gICAgc2hpcEJsb2Nrcy5mb3JFYWNoKChzaGlwQmxvY2spID0+IHtcbiAgICAgIHNoaXBCbG9jay5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzaGlwQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSwgNTAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbmxldCBwbGF5ZXJUdXJuO1xubGV0IHBsYXllckhpdHMgPSBbXTtcbmxldCBjb21wdXRlckhpdHMgPSBbXTtcbmNvbnN0IHBsYXllclN1bmtTaGlwcyA9IFtdO1xuY29uc3QgY29tcHV0ZXJTdW5rU2hpcHMgPSBbXTtcblxuZnVuY3Rpb24gY2hlY2tTY29yZSh1c2VyLCB1c2VySGl0cywgdXNlclN1bmtTaGlwcykge1xuICBmdW5jdGlvbiBjaGVja1NoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICB1c2VySGl0cy5maWx0ZXIoKHN0b3JlZFNoaXBOYW1lKSA9PiBzdG9yZWRTaGlwTmFtZSA9PT0gc2hpcE5hbWUpXG4gICAgICAgIC5sZW5ndGggPT09IHNoaXBMZW5ndGhcbiAgICApIHtcbiAgICAgIGlmICh1c2VyID09PSAncGxheWVyJykge1xuICAgICAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9IGB5b3Ugc3VuayB0aGUgQ29tcHV0ZXIncyAke3NoaXBOYW1lfWA7XG4gICAgICAgIHBsYXllckhpdHMgPSB1c2VySGl0cy5maWx0ZXIoXG4gICAgICAgICAgKHN0b3JlZFNoaXBOYW1lKSA9PiBzdG9yZWRTaGlwTmFtZSAhPT0gc2hpcE5hbWUsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodXNlciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9IGBUaGUgY29tcHV0ZXIgc3VuayB5b3VyICR7c2hpcE5hbWV9YDtcbiAgICAgICAgY29tcHV0ZXJIaXRzID0gdXNlckhpdHMuZmlsdGVyKFxuICAgICAgICAgIChzdG9yZWRTaGlwTmFtZSkgPT4gc3RvcmVkU2hpcE5hbWUgIT09IHNoaXBOYW1lLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdXNlclN1bmtTaGlwcy5wdXNoKHNoaXBOYW1lKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1NoaXAoJ2Rlc3Ryb3llcicsIDIpO1xuICBjaGVja1NoaXAoJ3N1Ym1hcmluZScsIDMpO1xuICBjaGVja1NoaXAoJ2NydWlzZXInLCAzKTtcbiAgY2hlY2tTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG4gIGNoZWNrU2hpcCgnY2FycmllcicsIDUpO1xuXG4gIGlmIChwbGF5ZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSAneW91IHN1bmsgYWxsIHRoZSBjb21wdXRlciBzaGlwcy4gWW91IFdPTiEnO1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuICBpZiAoY29tcHV0ZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSAnVGhlIGNvbXB1dGVyIGhhcyBzdW5rIGFsbCB5b3VyIHNoaXBzLiBZb3UgTE9TVCEnO1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlckdvKCkge1xuICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgdHVybkRpc3BsYXkudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXJzIEdvISc7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSAnVGhlIGNvbXB1dGVyIGlzIFRoaW5raW5nLi4uJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbUdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGggKiB3aWR0aCk7XG4gICAgICBjb25zdCBhbGxCb2FyZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXIgZGl2Jyk7XG4gICAgICBpZiAoXG4gICAgICAgIGFsbEJvYXJkQmxvY2tzW3JhbmRvbUdvXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rha2VuJykgJiZcbiAgICAgICAgYWxsQm9hcmRCbG9ja3NbcmFuZG9tR29dLmNsYXNzTGlzdC5jb250YWlucygnYm9vbScpXG4gICAgICApIHtcbiAgICAgICAgY29tcHV0ZXJHbygpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgYWxsQm9hcmRCbG9ja3NbcmFuZG9tR29dLmNsYXNzTGlzdC5jb250YWlucygndGFrZW4nKSAmJlxuICAgICAgICAhYWxsQm9hcmRCbG9ja3NbcmFuZG9tR29dLmNsYXNzTGlzdC5jb250YWlucygnYm9vbScpXG4gICAgICApIHtcbiAgICAgICAgYWxsQm9hcmRCbG9ja3NbcmFuZG9tR29dLmNsYXNzTGlzdC5hZGQoJ2Jvb20nKTtcbiAgICAgICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSAnVGhlIGNvbXB1dGVyIGhpdCB5b3VyIHNoaXAhJztcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBBcnJheS5mcm9tKGFsbEJvYXJkQmxvY2tzW3JhbmRvbUdvXS5jbGFzc0xpc3QpO1xuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAnYmxvY2snKTtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ2Jvb20nKTtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ3Rha2VuJyk7XG4gICAgICAgIGNvbXB1dGVySGl0cy5wdXNoKC4uLmNsYXNzZXMpO1xuICAgICAgICBjaGVja1Njb3JlKCdjb21wdXRlcicsIGNvbXB1dGVySGl0cywgY29tcHV0ZXJTdW5rU2hpcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSAnTm90aGluZyBoaXQgdGhpcyB0aW1lLic7XG4gICAgICAgIGFsbEJvYXJkQmxvY2tzW3JhbmRvbUdvXS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgIHR1cm5EaXNwbGF5LnRleHRDb250ZW50ID0gJ1lvdXIgR28hJztcbiAgICAgIGluZm9EaXNwbGF5LnRleHRDb250ZW50ID0gJ1BsZWFzZSB0YWtlIHlvdXIgZ28uJztcbiAgICAgIGNvbnN0IGFsbEJvYXJkQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyIGRpdicpO1xuICAgICAgYWxsQm9hcmRCbG9ja3MuZm9yRWFjaCgoYmxvY2spID0+XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spLFxuICAgICAgKTtcbiAgICB9LCA0MDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gIGlmICghZ2FtZU92ZXIpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdib29tJyk7XG4gICAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3UgaGl0IHRoZSBjb21wdXRlcnMgc2hpcCEnO1xuICAgICAgbGV0IGNsYXNzZXMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCk7XG4gICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAnYmxvY2snKTtcbiAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcigoY2xhc3NOYW1lKSA9PiBjbGFzc05hbWUgIT09ICdib29tJyk7XG4gICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAndGFrZW4nKTtcbiAgICAgIHBsYXllckhpdHMucHVzaCguLi5jbGFzc2VzKTtcbiAgICAgIGNoZWNrU2NvcmUoJ3BsYXllcicsIHBsYXllckhpdHMsIHBsYXllclN1bmtTaGlwcyk7XG4gICAgfVxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpKSB7XG4gICAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9ICdOb3RoaW5nIGhpdCB0aGlzIHRpbWUuJztcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgfVxuICAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICBjb25zdCBhbGxCb2FyZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlciBkaXYnKTtcbiAgICBhbGxCb2FyZEJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4gYmxvY2sucmVwbGFjZVdpdGgoYmxvY2suY2xvbmVOb2RlKHRydWUpKSk7XG4gICAgc2V0VGltZW91dChjb21wdXRlckdvLCAyMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGlmIChwbGF5ZXJUdXJuID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoXG4gICAgICBvcHRpb25Db250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICE9PSAwICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWNvbnRhaW5lcicpICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9ICdQbGVhc2UgcGxhY2UgYWxsIHlvdXIgc2hpcHMgZmlyc3QhJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbnMnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBjb25zdCBhbGxCb2FyZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlciBkaXYnKTtcbiAgICAgIGFsbEJvYXJkQmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PlxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKSxcbiAgICAgICk7XG4gICAgICBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgIHR1cm5EaXNwbGF5LnRleHRDb250ZW50ID0gJ1lvdXIgR28hJztcbiAgICAgIGluZm9EaXNwbGF5LnRleHRDb250ZW50ID0gJ1RoZSBnYW1lIGhhcyBzdGFydGVkISc7XG4gICAgfVxuICB9XG59XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, position) {\n    this.length = length;\n    this.position = position;\n    this.noOfHits = 0;\n  }\n\n  hit = () => {\n    this.noOfHits += 1;\n  };\n\n  isSunk = () => {\n    if (this.length === this.noOfHits) return true;\n    if (this.length > this.noOfHits) return false;\n    return true;\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanM/ZDAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLm5vT2ZIaXRzID0gMDtcbiAgfVxuXG4gIGhpdCA9ICgpID0+IHtcbiAgICB0aGlzLm5vT2ZIaXRzICs9IDE7XG4gIH07XG5cbiAgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5ub09mSGl0cykgcmV0dXJuIHRydWU7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gdGhpcy5ub09mSGl0cykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;