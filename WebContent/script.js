
let menu = [];
let order = [];
let apple = {name: "apple", price: 1.50};
let banana = {name: "banana", price: 2.50};
let orange = {name: "orange", price: 3.25};
let pear = {name: "pear", price: .50};
let peach = {name: "peach", price: 2.20};
let watermelon = {name: "watermelon", price: 4.25};
let kiwi = {name: "kiwi", price: 3.25};
let pineapple = {name: "pineapple", price: 5.50};
let appleClicks = 0;
let bananaClicks = 0;
let orangeClicks = 0;
let pearClicks = 0;
let peachClicks = 0;
let watermelonClicks = 0;
let kiwiClicks = 0;
let pineappleClicks = 0;
let total = 0;


menu.push(apple);
menu.push(banana);
menu.push(orange);
menu.push(pear);
menu.push(peach);
menu.push(watermelon);
menu.push(kiwi);
menu.push(pineapple);

let appleButton = document.getElementById("appleButton");
appleButton.addEventListener("click", (event) => {
	appleClicks++;	order.push(apple); 
});
let bananaButton = document.getElementById("bananaButton");
bananaButton.addEventListener("click", (event) => {
	order.push(banana); bananaClicks++;
});

let orangeButton = document.getElementById("orangeButton");
orangeButton.addEventListener("click", (event) => {
	order.push(orange); orangeClicks++;return order; 
}); 


let pearButton = document.getElementById("pearButton");
pearButton.addEventListener("click", (event) => {
	order.push(pear); pearClicks++;
});

let peachButton = document.getElementById("peachButton");
peachButton.addEventListener("click", (event) => {
	order.push(peach); peachClicks++;
});

let watermelonButton = document.getElementById("watermelonButton");
watermelonButton.addEventListener("click", (event) => {
	order.push(watermelon); watermelonClicks++;
});
let kiwiButton = document.getElementById("kiwiButton");
kiwiButton.addEventListener("click", (event) => {
	order.push(kiwi); kiwiClicks++;
});
let pineappleButton = document.getElementById("pineappleButton");
pineappleButton.addEventListener("click", (event) => {
	order.push(pineapple); pineappleClicks++;
});


function getReciept() {
	var newTitle = document.createElement("LI");
	var textnodeOne = document.createTextNode("Items Ordered:"); 
	var list = document.getElementById("recieptList"); 
	newTitle.appendChild(textnodeOne); 
	list.insertBefore(newTitle, list.childNodes[0]);  
	for (let i=0; i< order.length; i++){
	total += order[i].price;
	var newItem = document.createElement("LI");       
	var textnodeTwo = document.createTextNode("Item: " + order[i].name + "  Price: $" + order[i].price);
	newItem.appendChild(textnodeTwo);
	list.insertBefore(newItem, list.childNodes[2]);
	}
	var newTotal = document.createElement("LI"); 
	var textnodeThree = document.createTextNode("Total Price: $" + total);
	newTotal.appendChild(textnodeThree); 
	list.insertBefore(newTotal, list.childNodes[1]);                      
}

function clearOrder() {
	order.length = 0;
	var myList = document.getElementById("recieptList");
	myList.innerHTML = "";
}

let totalButtonEl = document.getElementById("totalButton");
totalButtonEl.addEventListener("click", (event) => {
	getReciept();
}); 

let clearButtonEl = document.getElementById("clearButton");
clearButtonEl.addEventListener("click", (event) => {
	clearOrder();
});
	
