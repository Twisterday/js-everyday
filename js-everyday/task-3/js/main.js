// p1
function compact(a) {
	return [...new Set(a)];
}

// p2
function createArray(start, end) {
	const arr = [];

	for (let i = start; i <= end; i++) {
		arr.push(i);
	}

	return arr;
}

let arr = createArray(2, 9);
console.log(arr);

// p3
function createNum(a, b) {
	for (let i = a; i <= b; i++) {
		for (let j = 1; j <= i - a + 1; j++) {
			console.log(i);
		}
	}
}

createNum(1, 5);

// p4
function randArray(k) {
	const randArr = [];

	for (let i = 0; i < k; i++) {
		const rand = Math.floor(Math.random() * 500) + 1;
		randArr.push(rand);
	}
	return randArr;
}

const randRes = randArray(5);
console.log(randRes);

// p5
function arraysType(arrT) {
	const numbers = [];
	const strings = [];
	for (const element of arrT) {
		if (typeof element === 'number') {
			numbers.push(element);
		} else if (typeof element === 'string') {
			strings.push(element);
		} else if (Array.isArray(element)) {
			const [numArr, strArr] = arraysType(element);
			numbers.push(...numArr);
			strings.push(...strArr);
		}
	}

	return [numbers, strings];
}

const arrT = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
const [numArr, strArr] = arraysType(arrT);
console.log(numArr);
console.log(strArr);


// p6
function calc(a, b, op) {
	let res;
	if (op === 1) {
		res = a - b;
	} else if (op === 2) {
		res = a * b;
	} else if (op === 3) {
		res = a / b;
	} else {
		res = a + b;
	}
	return res;
}

// p7
function findUnique(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return false;
			}
		}
	}
	return true;
}
