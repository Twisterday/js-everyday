// p1
function sumSliceArray(arr, first, second) {
	if (typeof first !== 'number' || typeof second !== 'number') {
		throw new Error('Serial numbers must be numbers!');
	}
	if (first >= arr.length || second >= arr.length) {
		throw new Error('Serial numbers exceed the length of the array!');
	}
	return arr[first] + arr[second];
}

// p2
function checkAge() {
	let name, age, status;

	name = prompt('Enter your name:');
	age = prompt('Enter your age:');
	status = prompt('Enter your status (admin, moderator, user):');

	if (!name || !age || !status) {
		throw new Error('The field is empty! Please enter your information.');
	}

	if (age < 18 || age > 70) {
		throw new RangeError('Age is out of range!');
	}

	const validSts = ['admin', 'moderator', 'user'];

	if (!validSts.includes(status)) {
		throw new EvalError('Invalid status value!');
	}

	alert(`Welcome, ${name}! You can now watch the movie.`);
}

// p3
function calcRectangleArea(width, height) {
	if (typeof width !== 'number' || typeof height !== 'number') {
		throw new TypeError('Please enter numbers only');
	}
	const area = width * height;

	return area;
}

// p4

// p5
function showUser(id) {
	if (id < 0) {
		throw new Error('Id must be a positive number');
	}
	return { id };
}

function showUsers(ids) {
	const result = [];

	for (const id of ids) {
		try {
			const user = showUser(id);
			result.push(user);
		} catch (error) {
			console.log(error.message);
		}
	}

	return result;
}

