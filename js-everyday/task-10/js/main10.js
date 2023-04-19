// p1

let names = {
	first: "Tom",
	second: "Sam",
	third: "Ray",
	fourth: "Bob",
	fifth: "Name №5"
};

let { first: f, third: x, fifth } = names;

console.log(f);

console.log(x);

console.log(fifth);

// p2

let data = {
	names: ["Sam", "Tom", "Ray", "Bob"],
	ages: [20, 24, 22, 26],
};

let { names: [, name2, , name4], ages: [, age2, , age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// p3

const mul = (...args) => {
	let result = 1;
	for (let arg of args) {
		if (typeof arg === 'number') {
			result *= arg;
		}
	}
	return result;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//  p4

let server = {
	data: 0,
	convertToString: function (callback) {
		callback(() => this.data + "");
	}
};

let client = {
	server: server,
	result: "",
	calc: function (data) {
		this.server.data = data;
		this.server.convertToString(this.notification());
	},
	notification: function () {
		return (callback) => {
			this.result = callback();
		};
	}
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//  p5

function mapBuilder(keysArray, valuesArray) {
	const map = new Map();
	for (let i = 0; i < keysArray.length; i++) {
		map.set(keysArray[i], valuesArray[i]);
	}
	return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

// p6

const arr = [];

for (let i = 0; i <= 2; i++) {
	arr[i] = function () {
		console.log(i);
	};
}

arr[0](); // 0
arr[arr.length - 1](); // 2


