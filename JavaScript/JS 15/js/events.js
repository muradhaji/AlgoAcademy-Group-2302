// function testF(event) {
//   console.log(event);
//   console.log(event.target);
// }

// // let headings = document.getElementsByTagName('h1');
// let headings = document.querySelectorAll('*');

// console.log(headings)

// for (i = 0; i < headings.length; i++) {
//   headings[i].addEventListener('click', testF);
// }

// let p = document.getElementById('parent');
// let m = document.getElementById('middle');
// let c = document.getElementById('child');

// function testP(event) {
//   event.stopPropagation();
//   console.log('parent clicked');
// }
// function testM(event) {
//   event.stopPropagation();
//   console.log('middle clicked');
// }
// function testC(event) {
//   event.stopPropagation();
//   console.log('child clicked');
// }

// p.addEventListener('click', testP);
// m.addEventListener('click', testM);
// c.addEventListener('click', testC);

// let link = document.querySelector('a');

// function testF(event) {
//   event.preventDefault();
//   console.log('Link clicked');
// }

// link.addEventListener('click', testF);

// document.forms[0].addEventListener('submit', (e) => {
//   e.preventDefault();

//   let data = {
//     title: e.target.title.value,
//     price: e.target.price.value,
//     description: e.target.description.value,
//     image: 'https://placehold.co/600x400',
//     category: e.target.category.value,
//   };

//   fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     body: JSON.stringify(data),
//   });
// });

// window.addEventListener('keydown', (e) => {
//   console.log(e);
//   if (e.key === '=' && e.ctrlKey) {
//     e.preventDefault();
//   } else if (e.key === '-' && e.ctrlKey) {
//     e.preventDefault();
//   }
// });

// window.addEventListener('DOMContentLoaded', () => {
//   console.log('loaded');
//   document.getElementById('loading').style.display = 'none';
//   document.documentElement.style.overflow = 'auto';
// });

// function getData() {
//   document.documentElement.style.overflow = 'hidden';
//   document.getElementById('loading').style.display = 'flex';
//   fetch('https://jsonplaceho', { method: 'GET' })
//     .then((res) => {
//       document.getElementById('loading').style.display = 'none';
//       document.documentElement.style.overflow = 'auto';
//     })
//     .catch((err) => {
//       document.getElementById('loading').style.display = 'none';
//       document.documentElement.style.overflow = 'auto';
//     });
// }

// document.forms[0].addEventListener('submit', (e) => {
//   e.preventDefault();
//   let data = new FormData(document.forms[0]);
//   for (field of data.entries()) {
//     console.log(field);
//   }
// });

window.addEventListener('mousemove', (e) => {
  console.log(e.x, e.y);
});
