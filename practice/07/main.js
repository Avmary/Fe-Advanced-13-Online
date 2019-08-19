const INIT = {
  STEP: 10,
  SIZE: 30,
};

const getRandomHEXBite = () => {
  let res = Math.floor(Math.random() * 256).toString(16);
  return (res = res.length > 1 ? res : `0${res}`);
};

const getRandomColor = () => `#${getRandomHEXBite()}${getRandomHEXBite()}${getRandomHEXBite()}`;


(function createBoxes(num) {
  const container = document.querySelector('#root');
  new Array(num).fill('').map((e, i) => {
    const div = document.createElement('div');
    div.style.cssText = `width : ${INIT.SIZE + i * INIT.STEP}px; 
                        height : ${INIT.SIZE + i * INIT.STEP}px;
                        background-color : ${getRandomColor()};`;
    container.appendChild(div);
  });
}(12));
