console.log('hello!');
//Deck module
const Deck = () => {
  let availablePlaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let selection = [];
  const addSelection = selected => {
    console.log(selected);
    selection.push(selected);
    console.log(typeof selected);
    let idToRem = availablePlaces.indexOf(parseInt(selected));
    availablePlaces.splice(idToRem, 1);
    // console.log(availablePlaces);
  };
  const getAvailability = () => {
    return availablePlaces;
  };
  return { addSelection, getAvailability };
};
//instantiate deck
let playDeck = Deck();
//Event to add X-Os on the deck UI
let clickCount = 0;
function blockSelect(element) {
  clickCount++;
  console.log(element);
  if (element.innerHTML === '') {
    let innerPara = document.createElement('p');
    innerPara.setAttribute('class', 'innerPara');
    if (clickCount % 2 == 0) {
      innerPara.innerHTML = 'O';
      innerPara.style.color = '#D4D2A5';
    } else {
      innerPara.innerHTML = 'X';
      innerPara.style.color = '#928779';
    }
    element.appendChild(innerPara);
    let selectedElem = element.getAttribute('data-griditem');
    playDeck.addSelection(selectedElem);
    console.log(playDeck.getAvailability());
  } else console.log('Select again!');
}
//------------------------------------------------------------
//the player module
const Player = name => {
  const getName = () => name;
  return { getName };
};
//lets play!
let human = Player('Wretched Human');
let computer = Player('Silicon God');
console.log(human.getName());
console.log(computer.getName());
