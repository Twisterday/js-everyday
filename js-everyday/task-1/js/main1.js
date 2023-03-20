// p2

let lastName;

lastName = prompt("enter your name:");

alert(lastName);

// p3

let first;
let second;

first = ["Deidara", "Hidan", "Kakuzu", "Konan", "Kisame", "Kisame", "Nagato", "Sasori", "Tobi", "Zetsu"]
second = ["Madara", "Itachi", "Sasuke", "Obito", "Shisui"]

second = [...first];

console.log(first);
console.log(second);

// p4

let object = {
	string: "Hisoka",
	number: 44,
	boolean: true,
	undefined: undefined,
	null: null
};

// p5
let isAdult = confirm("Confirm that you are 18 years old, please");
console.log(isAdult);

// p6

let yourFirstName = "Rostislav";
let yourLastName = "Haraida";
let yourGroup = 8;
let yourBirthYear = 2003;
let marriedStatus = false;

console.log(typeof yourGroup);
console.log(typeof yourBirthYear);
console.log(typeof marriedStatus);
console.log(typeof yourFirstName);
console.log(typeof yourLastName);

console.log(yourGroup);
console.log(yourBirthYear);
console.log(marriedStatus);
console.log(yourFirstName);
console.log(yourLastName);

let yourUndefined = undefined;
let yourNull = null;

console.log(typeof yourUndefined);
console.log(typeof yourNull);

// p7
let enterNick;
let enterEmail;
let enterPassword;

enterNick = prompt("enter your login:");
enterEmail = prompt("enter your email:");
enterPassword = prompt("enter your passwoerd:");

alert("Dear " + enterNick + ", your email is " + enterEmail + ", your password is " + enterPassword);

// p8
let secondsHour = 60 * 60;
let secondsDay = secondsHour * 24;
let secondsMonth = secondsDay * 30;

alert("Seconds in hour:" + secondsHour);
alert("Seconds in day:" + secondsDay);
alert("Seconds in month:" + secondsMonth);
