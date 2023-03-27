// p1

class Circle {
	constructor(center1, center2, radius) {
		this.centerX = center1;
		this.centerY = center2;
		this.radius = radius;
	}

	getLength() {
		return 2 * Math.PI * this.radius;
	}

	static getLengthByRadius(radius) {
		return 2 * Math.PI * radius;
	}

	getCircle() {
		return new Circle(this.center1, this.center2, this.radius);
	}

	static getCircleByParams(center1, center2, radius) {
		return new Circle(center1, center2, radius);
	}

	isPointInside(x, y) {
		const distance = Math.sqrt((x - this.center1) ** 2 + (y - this.center2) ** 2);
		return distance <= this.radius;
	}

	toString() {
		return `Circle with center (${this.center1}, ${this.center2}) and radius ${this.radius}`;
	}
}

//  p2
function propsCount(currentObject) {
	return Object.keys(currentObject).length;
}

// p3
class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	showFullName() {
		console.log(`${this.surname} ${this.name}`);
	}
}

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	showFullName(middleName) {
		console.log(`${this.surname} ${this.name} ${middleName}`);
	}

	showCourse() {
		const currentYear = new Date().getFullYear();
		const course = currentYear - this.year + 1;
		return Math.min(Math.max(course, 1), 6);
	}
}
//  p4
// a
class Marker1 {
	constructor(color, ink) {
		this.color = color;
		this.ink = ink;
	}

	print(text) {
		const inkPerSymbol = 0.5;
		let inkRequired = text.replace(/\s/g, "").length * inkPerSymbol;

		if (inkRequired > this.ink) {
			text = text.substring(0, Math.floor(this.ink / inkPerSymbol));
			this.ink = 0;
		} else {
			this.ink -= inkRequired;
		}

		console.log(`%c${text}`, `color: ${this.color}`);
	}
}

// b
class Marker2 {
	constructor(color, inkCapacity) {
		this.color = color;
		this.inkCapacity = inkCapacity;
	}

	print(text) {
		const inkPerSymbol = 0.5;
		let inkRequired = text.replace(/\s/g, "").length * inkPerSymbol;
		if (inkRequired > this.inkCapacity) {
			text = text.substring(0, this.inkCapacity / inkPerSymbol);
			this.inkCapacity = 0;
		} else {
			this.inkCapacity -= inkRequired;
		}
		console.log(`%c${text}`, `color: ${this.color}`);
	}

	refill(inkAmount) {
		this.inkCapacity += inkAmount;
		console.log(`Marker is filled, ink status: ${this.inkCapacity}`);
	}
}

class RefillableMarker extends Marker {
	refill(inkAmount) {
		super.refill(inkAmount);
		console.log(`Refillable marker, ink condition: ${this.inkCapacity}`);
	}
}

// p5
class Worker {
	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
	}

	showSalary() {
		const salary = this.dayRate * this.workingDays;
		console.log(`${this.fullName} earned${salary} for ${this.workingDays} days`);
	}
}
