// function name() {
//   body
// }
// name();

// function name(parameter1, parameter2 ... parameterN) {
//   body
// }
// name(4, "asd", argument);

// function sayHi() {
//   alert('Hello friend!');
// }
// sayHi;
// sayHi();

// function sayHi(person = "Unknown Person") {
//   alert(`Hello ${person}!`);
// }

// let mname = prompt("Enter your name:");
// sayHi(mname);
// sayHi(prompt("Enter your name:"));
// sayHi("Malik");
// sayHi(123 + 23);

// sayHi();
// sayHi("Eli");
// sayHi(undefined);
// sayHi(null);

// function sayHi(person) {
//   // Method 1
//   // if(person === undefined) {
//   //   person = "Unknown Person";
//   // }

//   // Method 2
//   // person = (person === undefined) ? "Unknown Person" : person;

//   // Method 3
//   // person = person ?? "Unknown Person";

//   alert(`Hello ${person}!`);
// }

// sayHi();

// function sum(a = 0, b = 0) {
//   let result = a + b;
//   return result;
//   // alert(result);

//   // return;

//   // return
//   // result;
// }

// sum(8, 5);
// sum(8);
// sum();

// sum(8, 5);
// console.log(sum(sum(4, 4), sum(2,3)));
// sum(undefined,8);

// -------------------
// Function Expressions & Arrow function
// -------------------

// function sum1(a, b) {
//   let result = a + b;
//   return result;
// }

// let sum2 = function (a, b) {
//   let result = a + b;
//   return result;
// };
// let sum22 = sum2;

// let sum3 = (a, b) => {
//   let result = a + b;
//   return result;
// };
// let sum33 = sum3;

// let sum = (a, b) => a + b;

// let double = (a) => a * 2;
// let double2 = (a) => {
//   let result = a * 2;
//   return result;
// };

// let sayHi = () => 'Hello Friend';

// 'use strict';
let age = 18;

// function hasAccess() {
//   if (age < 18) {
//     alert('No access');
//   } else {
//     alert('Has access');
//   }
// }

// if (age < 18) {
//   function hasAccess1() {
//     alert('No access');
//   }
// } else {
//   function hasAccess1() {
//     alert('Has access');
//   }
// }

// let hasAccess2;
// if (age < 18) {
//   hasAccess2 = function () {
//     alert('No access');
//   };
// } else {
//   hasAccess2 = function () {
//     alert('Has access');
//   };
// }
// hasAccess1();
// hasAccess2();

// let showNoAccess = () => {
//   alert('No access');
// };
// let showHasAccess = () => {
//   alert('Has access');
// };

// let checkAge = function (onSuccess, onFail) {
//   let age = +prompt('Enter your age:');
//   if (age < 18) {
//     onFail();
//   } else {
//     onSuccess();
//   }
// };

// checkAge(showHasAccess, showNoAccess);

// let myConfirm = (question, onOk, onCancel) => {
//   let answer = confirm(question);

//   if (answer == true) {
//     onOk(1);
//   } else {
//     onCancel(2);
//   }
// };

// let okfunc = (x) => {
//   alert(`${x} Contgratilations`);
// };

// let cancelfunc = (x) => {
//   alert(`${x} May be soon`);
// };

// // myConfirm('Are you married', okfunc, cancelfunc);
// myConfirm(
//   'Are you married?',
//   function (x) {
//     alert('You selected ok', x);
//   },
//   (x) => {
//     alert('you selected cancel', x);
//   }
// );

// app.get('/', (res) => {
//   res.send('Welcome!');
// });

// let reverse = (x) => {
//   let strx = String(x);
//   let ansArr = [];
//   for (let i = strx.length - 1; i >= 0; i--) {
//     ansArr[strx.length - 1 - i] = strx[i];
//   }
//   return ansArr.join('');
// };

let reverse = (x) => {
  let answer = 0;
  while (x > 0) {
    answer = answer * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return answer;
};

console.log(reverse(53241));
