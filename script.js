console.log('hello!');
let clickCount = 0;
function blockSelect(element) {
  clickCount++;
  console.log(element);
  if (element.innerHTML !== 'X') {
    let innerPara = document.createElement('p');
    innerPara.setAttribute('class', 'innerPara');
    if (clickCount % 2 == 0) innerPara.innerHTML = 'O';
    else innerPara.innerHTML = 'X';
    element.appendChild(innerPara);
  } else console.log('Select again!');
}
