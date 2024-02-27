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

function sum(a = 0, b = 0) {
  let result = a + b;
  return result;
  // alert(result);

  // return;

  // return 
  // result;
}

// sum(8, 5);
// sum(8);
// sum();

// sum(8, 5);
// console.log(sum(sum(4, 4), sum(2,3)));
// sum(undefined,8);