// p1
function upperCase(str) {
	if (str.charAt(0) === str.charAt(0).toUpperCase()) {
		return "String's starts with uppercase character";
	} else {
		return "String's not starts with uppercase character";
	}
}

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

// p2
const [login, domain] = email.split('@');
const loginReg = /^[a-zA-Z0-9._-]+$/;
const domainReg = /^[a-zA-Z0-9.-]+$/;
return loginRegex.test(login) && domainRegex.test(domain);

// p3
const inp = "Java Script";
const reg = /^(\w+)\s+(\w+)$/;
const outp = inp.replace(regex, "$2, $1");
console.log(outp);

// p4
function cardNumberValid(cardNumber) {
	const regex = /^(\d{4}-){3}\d{4}$/;
	return regex.test(cardNumber);
}

//  p5
function checkEmail(email) {
	const emailReg = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

	if (emailReg.test(email)) {
		if (email.includes('--')) {
			return 'Email is not correct!';
		}

		return 'Email is correct!';
	} else {
		return 'Email is not correct!';
	}
}

// p6
function checkLogin(str) {
	const numbers = str.match(/[0-9]+(?:\.[0-9]+)?/g);
	if (numbers) {
		for (let i = 0; i < numbers.length; i++) {
			const num = numbers[i];
			if (str.indexOf(num) === 0 || num.length > 10) {
				return false;
			}
		}
	}
	const loginRegex = /^[a-zA-Z0-9]{2,10}$/;
	return loginRegex.test(str);
}

