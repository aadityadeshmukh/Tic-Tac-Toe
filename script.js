console.log('hello!');
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
  } else console.log('Select again!');
}
