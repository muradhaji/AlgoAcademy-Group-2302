function testF1() {
  console.log('F 1 worked!');
}
function testF2() {
  console.log('F 2 worked!');
}
function testF3(event) {
  console.log(event);
}

let tstdv = document.getElementById('testDiv');
// tstdv.onclick = testF1;
// tstdv.onclick = () => {
//   testF1();
//   testF2();
// };

// tstdv.addEventListener('click', testF1, { once: true });
// tstdv.addEventListener('click', testF2);
// tstdv.removeEventListener('click', testF1);

// tstdv.addEventListener('click', () => {
//   console.log('a');
// });
// tstdv.removeEventListener('click', () => {
//   console.log('a');
// });

// tstdv.addEventListener('click', testF3);

window.addEventListener('contextmenu', testF3);
window.addEventListener('click', testF3);
window.addEventListener('keydown', testF3);
window.addEventListener('scroll', testF3);
