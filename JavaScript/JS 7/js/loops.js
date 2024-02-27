// let num = 5;
// let sum = 0;

// while(num > 0) {
// 	sum += num--;
// }

// let n = 1;
// while(n <= num) {
// 	// sum += n++;
// }

// console.log(sum, num, n);

// let i = 1;

// while(i > 0) {
// 	console.log(i);
// 	i--;
// }

// do {
// 	console.log(i);
// 	i--;
// } while(i > 0);

// for(begin; condition ; step) {
// body
// }

// for(let i = 0 ; i < 10 ; i++) {
// 	console.log(i);
// }

// let i;
// for(i = 0 ; i < 10 ; i++) {
// 	console.log(i);
// }

// let i = 0;
// for( ; i < 10 ; i++) {
// 	console.log(i);
// }

// let i = 0;
// for( ; i < 10 ; ) {
// 	console.log(i);
// 	i++;
// }

// let i = 0;
// for( ; ; ) {
// 	console.log(i);
// 	i++;
// }

// let i = 7;
// for(let i = 0 ; i <= 3; i++) {
// 	console.log(i);
// }

// console.log(i);

// for(let i = 0; true ; i++) {
// 	if(i == 3 || i == 6) {
// 		continue;
// 	}
// 	if(i == 10) {
// 		break;
// 	}
// 	console.log(i);
// }

// let i = 0;
// while(true) {
// 	if(i == 3 || i == 6) {
// 		i++;
// 		continue;
// 	}
// 	if(i == 10) {
// 		break;
// 	}
// 	console.log(i++);
// }

// let a = [5, -4, 0];
// let b = [2, 0, -9, 10];
// let c = [a, b, [5]];

// let x = [
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10],
// 	[11, 12, 13, 14, 15],
// 	[16, 17, 18, 19, 20],
// 	[21, 22, 23, 24, 25],
// ];

// let sum = 0;

// for(let i = 0 ; i < 4 ; i++) {
// 	sum += a[i];
// }

// rowLoop:
// for(let i = 0; i < x.length ; i++) {
// 	colLoop:
// 	for(let j = 0 ; j < x[i].length ; j++) {
// 		if(i % 2 == 0) {
// 			continue rowLoop;
// 		}
// 		console.log(x[i][j]);
// 	}
// }

// console.log(sum);

// let answer = Number(prompt("2 + 2 = ?"));

// switch(answer) {
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 5:
// 	case 6:
// 	case 7:
// 		alert("Wrong answer!");
// 		break;
// 	case 4:
// 		alert("Correct answer!");
// 		break;
// 	default:
// 		alert("Unknown answer");
// 		break;
// }

// if(answer === 3) {
// 	alert("Wrong answer!");
// } else if(answer === 4) {
// 	alert("Correct answer!");
// } else if(answer === 5) {
// 	alert("Wrong answer!");
// } else {
// 	alert("Unknown answer");
// }

// document.addEventListener("keyup", (event) => {
//   if (event.isComposing || event.keyCode === 229) {
//     return;
//   }
//   console.log(event.keyCode);
//   switch(event.keyCode){
//   	case 82:
//   	case 89:
//   		window.location.reload();
//   		break;
//   	default:
//   		break;
//   }
// });
