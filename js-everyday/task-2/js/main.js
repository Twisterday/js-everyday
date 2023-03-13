// p1
function check(a, b, c) {
	return a < b & b < c;
}

// p2
let x = "1";
let y = "2";

let res1 = x + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

x = 1;
y = "2";

x = !!x;

let res2 = x + y// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

x = !!1;
y = !!2;

let res3 = x && y // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

x = 1;
y = "Eren Yeager";

let res4 = x / y // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// p3
let isAdult;
isAdult = prompt("How mach old are you?");

if (isAdult >= 18) {
	alert("You have reached the age of majority")
} else {
	alert("Come to us after " + (18 - isAdult) + " years, :D");
}

// p4
function mode(arr) {
	const sortedArr = arr.sort((a, b) =>
		arr.filter(v => v === a).length
		- arr.filter(v => v === b).length
	);
	const mostOccurrence = sortedArr.pop();
	const newArr = [mostOccurrence];
	const filteredArr = arr.filter(num => num !== mostOccurrence);
	return [newArr, filteredArr];
}

const [newArr, arr] = mode([4, 5, 2, 1, 6, 5, 3, 5, 2, 5]);
console.log(newArr);
console.log(arr);

// p5
let sideA;
let sideB;
let sideC;
let move;

sideA = parseInt(prompt("Enter the value of the first side"));
sideB = parseInt(prompt("Enter the value of the second side"));
sideC = parseInt(prompt("Enter the value of the third side"));

move = prompt("If you want to find the area of ​​a triangle, write A, if you want to check whether this triangle is right-angled, write B")
if (move === "A" || move === "a") {
	const area = (sideA + sideB + sideC) / 2;
	alert("the area of ​​the triangle is " + area);
} else if (move === "B" || move === "b") {
	if (sideA * sideA + sideB * sideB === sideC * sideC || sideA * sideA + sideC * sideC === sideB * sideB || sideB * sideB + sideC * sideC === sideA * sideA) {
		alert("A triangle is right-angled");
	} else {
		alert("A triangle is not a right triangle");
	}
} else {
	alert("Enter A or B");
}

// p6
const now = new Date();
const hours = now.getHours();

if (hours >= 23 && hours <= 5) {
	alert("Good night");
}

if (hours >= 5 && hours <= 11) {
	alert("Good morning");
}

if (hours >= 11 && hours <= 17) {
	alert("Good afternoon");
}

if (hours >= 17 && hours <= 23) {
	alert("Good evening");
}
