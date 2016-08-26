console.log('Hello frontend');
var board=[0,0,0,
            0,0,0,
            0,0,0 ]

var currentTurn = "X";

var cell11 = document.getElementById('cell11');
cell11.addEventListener("click", click);

function click(e) {
	var id = e.target.id;
	var currentText = e.target.textContent;

	console.log("clicked", id, currentText);

	// only allow someone to make a move if there's
	// not a move in this box already.
	if (currentText !== "X" && currentText !== "O") {
		e.target.textContent = currentTurn;

		// switch the players only when someone has
		// made a legal move.
		switchPlayer();
	} 

	// e.target.textContent="x";
}


function switchPlayer() {
	if (currentTurn === "X") {
		currentTurn = "O";
	} else if (currentTurn === "O") {
		currentTurn = "X";
	}
}

var cols = document.getElementsByClassName('col');
for (i=0; i<cols.length; i++) {
	cols[i].addEventListener("click", click);
}