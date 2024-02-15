//Numbers

let num1 = Infinity;
let num2 = 7 / 0;

let num3 = -3 / 0;
let num4 = -Infinity;

let num5 = NaN;
let num6 = "asd" / 2;
let num7 = NaN ** 0;

let num8 = 2 ** 53 - 1;
let num9 = 1234567890123456789012345678901234567890n;

//Strings

let str1 = "";
let str2 = "c";
let str3 = "I'm 23 years old.";

let str4 = 'I am 23 years old';

let str5 = `I am 23 years old`;

let str6 = "I am " + (num8 % 90071992547409) + " years old";

let strmessage = "And You?";

let str7 = `I am ${num8 % 90071992547409} years old. ${strmessage}`;
let str8 = "I am ${num8 % 90071992547409} years old. ${strmessage}";

console.log(str8);