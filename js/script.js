var usedNums = new Array(34);

words = ["Died on Ship", "Mask", "Turret", "Suffocated", "Knight", "Eyeless dogs", "Left Behind", "Gave up", "Jester", "Doesn't heed warning", "Gravity", "Giant", "Bracken", "Harp Ghost", "Zeus Got em", "Land Mine", "Rolling Giant", "Snare Bug", "Bunker Spider", "Hoarding Bug", "Ghost Girl", "Nut Cracker", "Dawsome gamer", "Vatic", "Coil Head", "Shrimp", "Immortal Snail", "The Fiend", "Mimic", "Demo gorgon", "Shy Guy", "Slime", "Pressed the red button"];

let log = console.log;

for(let i=0; i<33; i++){
    let rnd = Math.floor(Math.random()*words.length);
    //gives duplicates
    //log( words[rnd] ); 
}

for(let i=0, tempwords=words, len=words.length; i<len; i++){
    let rnd = Math.floor(Math.random() * tempwords.length);
    //0.23423423423 -> 0
//    2.45345345345 -> 2
//    3.99999999999 -> 3
    log( tempwords[rnd] ); 
    tempwords.splice(rnd, 1);
}

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = getNewNum();
}

function getNewNum() {
  return words[(rnd)]; 
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}

const cell = document.querySelectorAll(".tableButton");

cell.forEach(e => {
  e.addEventListener("click", () => {
      e.classList.add("strickout");

  })
})