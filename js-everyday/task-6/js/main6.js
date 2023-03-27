// p1
const list = document.getElementById("list");
const firstItem = list.firstElementChild.textContent;
const secondItem = list.children[1].textContent;
const fourthItem = list.children[3].textContent;
const thirdItem = list.children[2].textContent;
const lastItem = list.lastElementChild.textContent;

const result = `${firstItem}, ${secondItem}, ${fourthItem}, ${thirdItem}, ${lastItem}`;
console.log(result);

// p2
const pageTitle = document.querySelector('h1');
pageTitle.style.backgroundColor = 'green';

const firstParagraph = document.querySelector("#myDiv p:nth-child(1)");
firstParagraph.style.fontWeight = "bold";

const secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
secondParagraph.style.color = "red";

const fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
fourthParagraph.style.fontStyle = "italic";


const myList = document.querySelector('#myList');
myList.style.display = 'flex';
myList.style.listStyle = "none";
myList.style.paddingLeft = "80px";

const spanElement = document.querySelector("span");
spanElement.style.color = "transparent";

// p3

const body = document.createElement("body");

const main = document.createElement("main");
main.classList.add("mainClass", "check", "item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv");

const p = document.createElement("p");
p.textContent = "First paragraph";

div.appendChild(p);

main.appendChild(div);

body.appendChild(main);

document.documentElement.appendChild(body);





