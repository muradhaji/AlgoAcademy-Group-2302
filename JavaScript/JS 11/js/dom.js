// let intervalId;
// let min = 59;
// let sec = 60;

// function start() {
//   intervalId = setInterval(setCounter, 1000);
// }
// function stop() {
//   clearInterval(intervalId);
// }
// function reset() {
//   clearInterval(intervalId);
//   min = 59;
//   sec = 60;
//   document.getElementById('counter').innerText = `${min}:${sec}`;
// }

// function setCounter() {
//   sec--;
//   if (sec == 0) {
//     if (min == 0) {
//       stop();
//       document.getElementById('counter').innerText = `0:0`;
//       return;
//     }
//     min--;
//     sec = 60;
//   }

//   document.getElementById('counter').innerText = `${min}:${sec}`;
// }

// console.log(document.getElementById('myhead1'));
// console.log(myhead1);

// let myhead1 = 5;
// myhead1.innerText = 'Asdqdeqwe';

// console.log(document.getElementsByClassName('myp'));
// console.log(document.getElementsByClassName('myp myp1'));

// console.log(document.getElementsByTagName('body'));
// console.log(document.getElementsByTagName('p'));

// console.log(document.getElementsByTagNameNS());

// console.log(document.getElementsByName('first'));
// console.log(document.getElementsByName('third'));

// function Add() {
//   let xInp = document.getElementsByName('x')[0];
//   let yInp = document.getElementsByName('y')[0];
//   let cInp = document.getElementsByName('c')[0];

//   cInp.value = +xInp.value + +yInp.value;
// }

// document.getElementsByTagName('form')[0].addEventListener('change', Add);

// console.log(document.querySelector('body > form > input'));
// console.log(document.querySelectorAll('body > form > input'));
// console.log(document.querySelectorAll('.myp.myp1'));

// console.log(document.getElementsByName('x')[0].matches('body > form > input'));
// console.log(
//   document.getElementsByName('x')[0].matches('body > div > form > input')
// );

// console.log(document.getElementsByName('x')[0].closest('.testdiv'));

function turnDarkMode() {
  if (document.body.classList.value == 'blackAndWhite') {
    document.body.setAttribute('class', '');
  } else {
    document.body.setAttribute('class', 'blackAndWhite');
  }
}
