//Deck module
let winningCombos = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
];
let winnerfound = 0;
const Deck = () => {
  let availablePlaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let selection = [];
  const addSelection = (selected) => {
    selection.push(selected);
    let idToRem = availablePlaces.indexOf(parseInt(selected));
    availablePlaces.splice(idToRem, 1);
  };
  const getAvailability = () => {
    return availablePlaces;
  };
  const checkWinner = (p1, p2) => {
    let winnerfound = false;
    console.log(p1, p2);
    if (p1.selection.length >= 3) {
      console.log('p1 eligible for check');
      winnerfound = tallyCombos(p1.selection);
    }
    console.log(`checkwinner -> ${winnerfound}`);
    return winnerfound;
  };
  const tallyCombos = (selArray) => {
    console.log(selArray);
    let ifwin = false;
    for (let i = 0; i < winningCombos.length; i++) {
      console.log();
      ifwin = winningCombos[i].every((val, index) => val === selArray[index]);
      return ifwin;
    }
  };
  return { addSelection, getAvailability, checkWinner };
};
//instantiate deck
let playDeck = Deck();
//the player module
const Player = (name) => {
  let selection = [];
  const getName = () => name;
  const addSelection = (selected) => {
    selection.push(selected);
  };
  return { getName, addSelection, selection };
};
//lets play!
let human = Player('Wretched Human');
let computer = Player('Silicon God');
console.log(human.getName());
console.log(computer.getName());
//Event to add X-Os on the deck UI
let clickCount = 0;
function blockSelect(element) {
  // clickCount++;
  console.log(element);
  if (element.innerHTML === '') {
    let innerPara = document.createElement('p');
    innerPara.setAttribute('class', 'innerPara');
    // if (clickCount % 2 !== 0) {
    innerPara.innerHTML = 'X';
    innerPara.style.color = '#928779';
    // }
    if (winnerfound) console.log('Match Over!');
    else {
      element.appendChild(innerPara);
      let selectedElem = element.getAttribute('data-griditem');
      playDeck.addSelection(selectedElem);
      human.addSelection(selectedElem);
      let availablePlaces = playDeck.getAvailability();

      if (availablePlaces.length < 5) {
        winnerfound = playDeck.checkWinner(human, computer);
        console.log(winnerfound);
        if (winnerfound) availablePlaces = [];
      }
      //Let Player 2 select
      console.log(availablePlaces.length);
      if (availablePlaces.length > 0 && !winnerfound) {
        let randomIndex = Math.floor(Math.random() * availablePlaces.length);
        console.log(randomIndex);
        let randomElem = availablePlaces[randomIndex];
        console.log(`[data-griditem="${randomElem}"]`);
        let p2Sel = document.querySelector(`[data-griditem="${randomElem}"]`);
        let p2Para = document.createElement('p');
        p2Para.setAttribute('class', 'innerPara');
        p2Para.innerHTML = 'O';
        p2Para.style.color = '#D4D2A5';
        p2Sel.appendChild(p2Para);
        selectedElem = p2Sel.getAttribute('data-griditem');
        playDeck.addSelection(selectedElem);
        computer.addSelection(selectedElem);
        console.log(playDeck.getAvailability());
      }
    }
  } else console.log('Select again!');
}
//------------------------------------------------------------
