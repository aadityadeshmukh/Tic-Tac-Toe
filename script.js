console.log('hello!');
function blockSelect(element) {
  console.log(element);
  if (element.innerHTML !== 'X') element.innerHTML = 'X';
  else console.log('Select again!');
}
