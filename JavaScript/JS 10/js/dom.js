// function testFunc() {
//   console.log(this);
// }

// let testObj = {
//   name: 'John',
//   testMethod: testFunc,
//   // testMethod: function () {
//   //   console.log(this);
//   // },
// };

// testFunc();

// window.testFunc();

// // window.alert('asdasd');
// // window.prompt();
// // window.confirm();

// // window.location.reload();

// testObj.testMethod();

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// console.log(navigator);
// console.log(navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Firefox');

// console.log({ name: 'John', age: 27 });
// console.table({ name: 'John', age: 27 });

// console.log(screen.orientation.);

// window.addEventListener('orientationchange', function () {
//   let str = `Angle: ${screen.orientation.angle}`;
//   this.document.body.innerHTML += str;
// });

// console.log(location);
// location.replace("https://www.azza.az");
// location.port = 5501;
// location.href = 'https://www.azza.az';

// history.back();
// history.forward();
// history.go(-3)
// history.go(5)

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     let data = JSON.parse(this.responseText);
//     for (let todo of data) {
//       document.body.innerHTML += `<h1>${todo.completed ? "✅" : "❌"} ${todo.title}</h1>`;
//     }
//   };
//   // xhttp.open('GET', 'js/dom.js');
//   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//   xhttp.send();
// }

// loadDoc();

// navigator.geolocation.getCurrentPosition(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// navigator.geolocation.getCurrentPosition(
//   (data) => {
//     // document.body.innerHTML += `<h2>Latitude: ${data.coords.latitude} - Longitude: ${data.coords.longitude}</h2>`;
//     document.body.innerHTML += `<a target="_blank" href="https://www.openstreetmap.org/#map=18/${data.coords.latitude}/${data.coords.longitude}">Open map</a>`;
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// span.innerText = "<p>asdqwe</p>"
// span.innerHTML = "<p>asdqwe</p>"

// let names = ['John', 'Mike', 'Ross'];
// let span = document.getElementById('changeText');

// let i = 0;

// setInterval(changeName, 2000);

// function changeName() {
//   span.innerText = names[i];
//   span.style.opacity = '0';
//   let r = Math.trunc(Math.random() * 256);
//   let g = Math.trunc(Math.random() * 256);
//   let b = Math.trunc(Math.random() * 256);
//   span.style.color = `rgb(${r},${g},${b})`;
//   setTimeout(() => {
//     span.style.opacity = '1';
//   }, 50);
//   setTimeout(() => {
//     span.style.opacity = '0';
//   }, 1900);
//   i = (i + 1) % 3;
// }

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.childNodes);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.parentNode);
// console.log(document.head.parentNode);
// console.log(document.body.parentNode == document.head.parentNode);

// console.log(document.body.childNodes[3].childNodes[5]);
// console.log(
//   document.body.childNodes[3].childNodes[5].previousSibling.previousSibling
// );
// console.log(document.body.childNodes[3].childNodes[5].nextSibling.nextSibling);
// console.log(document.body.childNodes[3].lastChild.nextSibling);
// console.log(document.body.childNodes[3].firstChild.previousSibling);

// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[1].children[2]);
// console.log(document.body.children[1].children[2].previousElementSibling);
// console.log(document.body.children[1].children[2].nextElementSibling);

// let x = document.getElementsByClassName('test');

// for (let i = 0; i < x.length; i++) {
//   x[i].innerText = 'asd';
// }
