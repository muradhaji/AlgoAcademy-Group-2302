// let x = document.getElementById('div2');
// // x.innerHTML += "<h1>Heading 7</h1>"

// let newH1 = document.createElement('h1');
// // newH1.innerText = 'Heading 7';

// let newH1Text = document.createTextNode('Heading 7');
// newH1.append(newH1Text);

// x.prepend(newH1);
// x.prepend("<h1>Heading 7</h1>");
// x.append(newH1);
// x.before(newH1);
// x.after(newH1);
// x.remove();
// x.replaceWith(newH1);
// x.replaceChildren(newH1);
// x.replaceChild(newH1, x.children[1]);
// x.children[1].replaceWith(newH1);
// x.children[1] = newH1;

// x.innerHTML += "<h1>Heading 7</h1>"
// x.outerHTML += '<h1>Heading 7</h1>';
// x.outerHTML = '<h1>Heading 7</h1>' + x.outerHTML;
// x.insertAdjacentHTML('beforebegin', '<h1>Heading 7</h1>');
// x.insertAdjacentHTML('afterbegin', '<h1>Heading 7</h1>');
// x.insertAdjacentHTML('beforeend', '<h1>Heading 7</h1>');
// x.insertAdjacentHTML('afterend', '<h1>Heading 7</h1>');

// x.insertAdjacentText('afterbegin', '<h1>Heading 7</h1>');
// x.insertAdjacentElement('afterbegin', newH1);
// x.insertBefore(newH1, x.children[1]);

// let div2 = document.getElementById('div2');
// let h2 = document.getElementById('h2');

// div2.append(h2);

// let h2copy = h2;
// let h2copy = h2.cloneNode();
// let h2copy = h2.cloneNode(true);
// div2.append(h2copy);

// console.log(h2);
// console.log(h2copy);

// let user = {
//   name: 'Asdasd',
//   age: 123,
//   // cloneNode: function () {
//   //   let newObj = {};
//   //   newObj.name = this.name;
//   //   newObj.age = this.age;
//   //   return newObj;
//   // },
// };

// let usr2 = user.cloneNode();
// console.log(usr2);

// let fragment = new DocumentFragment();

// for (let i = 8; i <= 10; i++) {
//   let newDom = document.createElement('h1');
//   newDom.innerText = `Heading ${i}`;

//   fragment.append(newDom);

//   // x.append(newDom);
// }

// x.append(fragment);
// console.log(fragment);

// document.write('<h1>Heading 21</h1>');
// document.write('<h1>Heading 22</h1>');
// document.write('<h1>Heading 23</h1>');

// setTimeout(() => {
//   document.write('<h1>Heading 24</h1>');
// }, 3000);

// function clickFunction() {
//   document.write('<h1>Heading 25</h1>');
// }

// console.log(document.body.getAttribute('class'));
// console.log(document.body.className);

// function changeTheme() {
//   if (document.body.className.includes('light')) {
//     document.body.className = document.body.className.replace('light', 'dark');
//   } else {
//     document.body.className = document.body.className.replace('dark', 'light');
//   }
// }

// console.log(document.body.classList);
// console.log(document.body.classList.length);
// document.body.classList[0] = 'dark'; // Wrong
// document.body.classList.add('new');
// document.body.classList.remove('qwe');
// document.body.classList.replace('zxc', 'ZXC');
// document.body.classList.toggle('Test');
// document.body.classList.toggle('Test');
// document.body.classList.toggle('Test');
// console.log(document.body.classList.contains('light'));
// console.log(document.body.classList.contains('dark'));

// function changeTheme() {
//   if (document.body.classList.contains('light')) {
//     document.body.classList.replace('light', 'dark');
//   } else {
//     document.body.classList.replace('dark', 'light');
//   }
// }

// function changeTheme() {
//   document.body.classList.toggle('dark');
// }

// let h1s = document.getElementsByTagName('h1');

// for (let i = 0; i < h1s.length; i++) {
//   h1s[i].style.border = '2px solid red';
// }

// console.log(document.body.style.color);
// document.body.style.color = 'orangered';
// document.body.style.backgroundColor = 'cyan';
// document.body.style.textAlign = 'center';
// document.body.style.textAlign = '';
// document.body.style.textAlign = 'initial';
// document.body.style.setProperty('color', 'orangered');
// document.body.style.setProperty('color', 'orangered', 'important');
// document.body.style.setProperty('background-color', 'cyan');
// document.body.style.setProperty('text-align', 'center');
// document.body.style.removeProperty('text-align');
// console.log(document.body.style.getPropertyValue('background-color'));
// console.log(document.body.style.backgroundColor);
// console.log(document.body.style.getPropertyPriority('color'));
// console.log(document.body.style.getPropertyPriority('background-color'));

let bodyComputedStyles = getComputedStyle(document.body);
bodyComputedStyles.textAlign = 'right';

console.log(bodyComputedStyles.color);
console.log(bodyComputedStyles.backgroundColor);
console.log(bodyComputedStyles.textAlign);
