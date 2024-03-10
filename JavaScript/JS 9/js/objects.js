// let user = new Object();

// user.name = 'John';
// user.age = 27;

// let user = {};

// user.name = 'John';
// user.age = 27;

// let user = { name: 'John', age: 27, 1: 'word', 'last name': 'Doe' };

// delete user.age;
// delete user;

// x = 5;
// delete x;
// console.log(x);

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user[1]);
// console.log(user['last name']);

// let user = {};
// let propName = 'age';
// let userAge = 27;

// user['name'] = 'John';
// user[propName] = userAge;
// user.propName = 27; // wrong

// console.log(user);
// console.log(user[propName]);

// let user = {};

// let key = prompt('Enter object key:');
// let value = prompt('Enter object value:');

// user[key] = value;
// user["isAdmin"] = "true";

// let user = { [key]: value };

// user.key = value;
// user[key] = value;

// console.log(user);

// function createUser(name, age) {
//   let newUser = { name: name, age: age };
//   return newUser;
// }
// function createUser(name, age) {
//   return { name: name, age: age };
// }
// function createUser(name, age) {
//   return { name, age };
// }

// let user = createUser('John', 27);
// let user2 = createUser('Mike', 42);
// user.height = undefined;

// console.log(user);
// console.log(user2);
// console.log(user.height === undefined ? 'Yoxdur' : 'Var');
// console.log('height' in user);

// for (key in user) {
//   console.log(`${key} -> ${user[key]}`);
// }

// name -> John
// age -> 27

// let codes = {
//   // 90: 'Turkey',
//   // 49: 'Germany',
//   // 994: 'Azerbaijan',
//   // 41: 'Switzerland',
//   // 1: 'USA',
//   '.90': 'Turkey',
//   '49n': 'Germany',
//   '+994': 'Azerbaijan',
//   '-41': 'Switzerland',
//   '=1': 'USA',
//   name: 'John',
//   age: 27,
// };

// for (let key in codes) {
//   console.log(key);
// }

// let x = 5;
// let y = x;
// x = 10;

// console.log(x);
// console.log(y);

// let user = {
//   name: 'John',
//   'last name': 'Doe',
//   age: 27,
//   univercity: {
//     name: 'BDU',
//     city: 'Baku',
//   },
//   // sayName: function () {
//   //   console.log(`Hello my name is ${this.name}`);
//   // },
//   // sayName: () => {
//   //   console.log(`Hello my name is ${this.}`);
//   // },
//   // sayFullName: function () {
//   //   console.log(`Hello i am ${this.name} ${this['last name']}`);
//   // },
// };

// let user2 = user;

// let user2 = {};

// user2.name = user.name;
// user2['last name'] = user['last name'];
// user2.age = user.age;
// user2.sayName = user.sayName;
// user2.sayFullName = user.sayFullName();

// for (key in user) {
//   user2[key] = user[key];
// }

// function createObjCopy(sourceObj) {
//   let newObj = {};
//   for (key in sourceObj) {
//     if (typeof sourceObj[key] === 'object') {
//       newObj[key] = createObjCopy(sourceObj[key]);
//     } else {
//       newObj[key] = sourceObj[key];
//     }
//     // newObj[key] =
//     //   typeof sourceObj[key] === 'object'
//     //     ? createObjCopy(sourceObj[key])
//     //     : sourceObj[key];
//   }
//   return newObj;
// }

// Object.assign(user2, user);

// let user2 = createObjCopy(user);

// let user2 = structuredClone(user);

// user2.name = 'Mike';
// user2['last name'] = 'Ross';
// user2.age = 42;
// user2.univercity.name = 'GDU';
// user2.univercity.city = 'Ganja';

// console.log(user);
// console.log(user2);

// let user = {
//   name: 'John',
//   // univercity: {
//   //   name: 'BDU',
//   //   city: 'Baku',
//   // },
//   // sayName: function () {
//   //   console.log(`Hello my name is ${this.name}`);
//   // },
//   // sayName: 4,
// };

// console.log(user.univercity ? user.univercity.name : undefined);
// console.log(user?.univercity?.name);

// user?.sayName?.();

// -------------
// Task
// -------------

// let bankNotes = [
//   { value: 200, count: 3 },
//   { value: 100, count: 0 },
//   { value: 50, count: 7 },
//   { value: 20, count: 1 },
//   { value: 10, count: 0 },
//   { value: 5, count: 2 },
//   { value: 1, count: 3 },
// ];

// amount = 4
// answer = "Not possible"

// amount = 27
// answer = "1x20, 1x5, 2x1"

// function sumFunc() {
//   console.log(this);
// }

// let sumFunc = function () {
//   console.log(this);
// };

// let sumFunc = () => {
//   console.log(this);
// };

// let obj = {
//   sum: sumFunc,
// };

// sumFunc();
// obj.sum();

// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user = createUser('John', 27);

// let user2 = new User('John', 27);

// console.log(user);
// console.log(user2);

// let user = { name: 'John', age: 27, id: 13 };

// // user.fid = 42;

// // let id = Symbol();
// let id = Symbol('facebook id');

// user[id] = 42;

// console.log(user);
// console.log(user[id]);

// for (key in user) {
//   console.log(key);
// }

// console.log(Object.keys(user));

// let arr = [
//   { name: 'John', age: 27 },
//   { name: 'Mike', age: 42 },
//   { name: 'Ross', age: 33 },
// ];

// for (index in arr) {
//   console.log(arr[index]);
//   console.log(arr[index].name, arr[index].age);
// }

let bankNotes = [
  { value: 200, count: 3 },
  { value: 100, count: 0 },
  { value: 50, count: 7 },
  { value: 20, count: 1 },
  { value: 10, count: 0 },
  { value: 5, count: 2 },
  { value: 1, count: 3 },
];

function cashOut(amount) {
  let bankNotesCopy = structuredClone(bankNotes);
  let answer = '';

  for (let i = 0; i < bankNotesCopy.length; i++) {
    let final = Math.min(
      Math.floor(amount / bankNotesCopy[i].value),
      bankNotesCopy[i].count
    );
    if (final > 0) {
      amount -= final * bankNotesCopy[i].value;
      answer += `${final}x${bankNotesCopy[i].value} `;
      bankNotesCopy[i].count -= final;
    }
  }
  // debugger;
  if (amount > 0) {
    // alert('Impossible!');
    console.log('Impossible!');
  } else {
    // alert(answer);
    console.log(answer);
    bankNotes = bankNotesCopy;
  }
}

let num = 0;

while (num != null) {
  num = prompt('Enter amount');
  cashOut(Number(num));
}
