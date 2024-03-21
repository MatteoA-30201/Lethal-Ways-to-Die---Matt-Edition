var usedNums = new Array(76);

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

let bingoChoices = ["Died on Ship", "Mask", "Turret", "Suffocated", "Knight", "Eyeless dogs", "Left Behind", "Gave up", "Jester", "Doesn't heed warning", "Gravity", "Giant", "Bracken", "Harp Ghost", "Zeus Got em", "Land Mine", "Rolling Giant", "Snare Bug", "Bunker Spider", "Hoarding Bug", "Ghost Girl", "Nut Cracker", "Dawsome gamer", "Vatic", "Coil Head", "Shrimp", "Immortal Snail", "The Fiend", "Mimic", "Demo gorgon", "Shy Guy", "Slime", "Pressed the red button"];

function getNewNum() {
	return bingoChoices[(Math.floor(Math.random() * bingoChoices.length))];
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}

const tableButton = document.querySelectorAll(".tableButton");

const tableButtonJS = tableButton.forEach(button => {
  button.addEventListener('click', event => {
    document.getElementById("square0").style.backgroundColor = "grey";
    document.getElementById("square1").style.backgroundColor = "grey";
    document.getElementById("square2").style.backgroundColor = "grey";
    document.getElementById("square3").style.backgroundColor = "grey";
    document.getElementById("square4").style.backgroundColor = "grey";
    document.getElementById("square5").style.backgroundColor = "grey";
    document.getElementById("square6").style.backgroundColor = "grey";
    document.getElementById("square7").style.backgroundColor = "grey";
    document.getElementById("square8").style.backgroundColor = "grey";
    document.getElementById("square9").style.backgroundColor = "grey";
    document.getElementById("square10").style.backgroundColor = "grey";
    document.getElementById("square11").style.backgroundColor = "grey";
    document.getElementById("square12").style.backgroundColor = "grey";
    document.getElementById("square13").style.backgroundColor = "grey";
    document.getElementById("square14").style.backgroundColor = "grey";
    document.getElementById("square15").style.backgroundColor = "grey";
    document.getElementById("square16").style.backgroundColor = "grey";
    document.getElementById("square17").style.backgroundColor = "grey";
    document.getElementById("square18").style.backgroundColor = "grey";
    document.getElementById("square19").style.backgroundColor = "grey";
    document.getElementById("square20").style.backgroundColor = "grey";
    document.getElementById("square21").style.backgroundColor = "grey";
    document.getElementById("square22").style.backgroundColor = "grey";
    document.getElementById("square23").style.backgroundColor = "grey";
  })
})