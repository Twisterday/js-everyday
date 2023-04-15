// p1
var myWindow = window.open("", "", "width=300,height=300");

setTimeout(function () {
	myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
	myWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
	myWindow.close();
}, 6000);

// p2
function changeCSS() {
	var text = document.getElementById('text');
	text.style.color = 'orange';
	text.style.fontSize = '20px';
	text.style.fontFamily = 'Comic Sans MS';
}

// p3

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', function () {
	document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function () {
	document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function () {
	document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function () {
	document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function () {
	document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function () {
	document.body.style.backgroundColor = 'white';
});

// p4
function deleteSelectedItem() {
	const myList = document.getElementById("myList");
	const selectedOption = myList.options[myList.selectedIndex];
	myList.removeChild(selectedOption);
}

// p5

const button4 = document.getElementById('button4');
const message4 = document.getElementById('message4');

button4.addEventListener('click', function () {
	message4.textContent = 'I was pressed!';
});

button4.addEventListener('mouseover', function () {
	message4.textContent = 'Mouse on me!';
});

button4.addEventListener('mouseout', function () {
	message4.textContent = 'Mouse is not on me!';
});

// p6
const output = document.getElementById('output');

function displayWindowSize() {

	const width = window.innerWidth;
	const height = window.innerHeight;
	output.textContent = `Width: ${width}, Height: ${height}`;
}

window.addEventListener('resize', displayWindowSize);
displayWindowSize();