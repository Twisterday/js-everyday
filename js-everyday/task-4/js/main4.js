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
	let name;
	let age;
	let status;

	name = prompt("Enter your name:");
	name = prompt("Enter your age:");
	name = prompt("Enter your status (admin, moderator, user):");

	if (!name, !age, !status) {
		throw new Error('The field is empty! Please enter your age');
	} else {
		alert(`Welcome, ${name}! You can now watch the movie.`);
	}
	if (age < 18 || age > 70) {
		throw new RangeError('Age is out of range!');
	} else {
		alert(`Welcome, ${name}! You can now watch the movie.`);
	}

	const validSts = ['admin', 'moderator', 'user'];

	if (!validSts.includes(status)) {
		throw new EvalError('Invalid status value!');
	} else {
		alert(`Welcome, ${name}! You can now watch the movie.`);
	}


}