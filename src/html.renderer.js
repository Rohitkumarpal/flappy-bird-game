const createElem = col => {
  let elem = document.createElement('div');
  elem.style.display = "flex"
  elem.style.width = 30
  elem.classList.add('board');
  elem.style.display = 'inline-block';

  switch (col) {
    case 0:
      elem.style.marginLeft = '10px';
      elem.style.height = '12px';
      elem.style.width = '12px';
      elem.style['background-color'] = 'white'
      // elem.style['border-radius'] = '90%';
      break;
    case 1:
      elem.style.marginLeft = '10px';
      elem.style.height = '12px';
      elem.style.width = '12px';
      elem.style['background-color'] = 'cornflowerblue'
      elem.style['border-radius'] = '90%';
      break;
    case 2:
      elem.style.marginLeft = '10px';
      elem.style.height = '24px';
      elem.style.width = '12px';
      elem.style['background-color'] = 'green'
      // elem.style['border-radius'] = '90%';
      break;

    default:
      break;
  }
  // elem.style.marginLeft = '10px';
  // elem.style.height = '6px';
  // elem.style.width = '6px';
  // elem.style['background-color'] = 
  //   col === 0
  //     ? 'white'
  //     : (col === 1
  //       ? 'cornflowerblue'
  //       : col === 2
  //         ? 'gray'
  //         : 'silver');
  // elem.style['border-radius'] = '90%';
  return elem;
}

export const paint = (game, lives, score) => {
  document.body.innerHTML = `Lives: ${lives}, Score: ${score}`;

  game.forEach(row => {
    console.log('row', row)
     let rowContainer = document.createElement('div');
    row.forEach(col => rowContainer.appendChild(createElem(col)));
    document.body.appendChild(rowContainer);
  });
};