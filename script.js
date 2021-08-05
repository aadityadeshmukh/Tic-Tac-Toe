console.log('hello!');
function blockSelect(element) {
  console.log(element);
  if (element.innerHTML !== 'X') {
    let innerPara = document.createElement('p');
    innerPara.setAttribute('class', 'innerPara');
    innerPara.innerHTML = 'X';
    element.appendChild(innerPara);
  } else console.log('Select again!');
}
