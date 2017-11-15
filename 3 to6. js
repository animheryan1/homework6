const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

const nextMove = function(board, isX){
	let i = 0;
	while(i<=board.length){
		let j = 0;
		while(j<=board.length){
			if(board[i][j] == " ")
				return [i, j];

		j++;
		}
	i++;
	}
};


const makeMove = function(board, location, isX){
	if((location[0]<=2 && location[0]>=0) && (location[1]<=2 && location[1]>=0)){
		if(isX === true){
			board[location[0]][location[1]] = "x";
		} else {
			board[location[0]][location[1]] = "o";
		}
		return 0;
	}else{
		return -1;
	}
};


const findWinner = function (board){
	for(i = 0; i<board.length; i++){ //horizontal checking
		if(board[i][0]===board[i][1] && board[i][1]===board[i][2] &&
		 (board[i][0]==="x" || board[i][0]==="o")){
			return {
				winner: board [i][0],
				winningLocations: [[i,0], [i,1], [i,2]]
			};
		}
	}

	for(i = 0; i<board.length; i++){ //vertical checking
		if(board[0][i]===board[1][i] && board[1][i]===board[2][i] && (board[0][i]==="x" || board[0][i]==="o")){
			return {
				winner: board[0][i],
				winningLocations: [[0,i], [1,i], [2,i]]
			};
		}
	}

	if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && //left to right diagnal
		(board[0][0]==="x" || board[0][0]==="o")){
		return {
			winner: board[0][0],
			winningLocations: [[0,0], [1,1], [2,2]]
		};
	}

	if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && //right to left diagnal
		(board[0][2]==="x" || board[0][2]==="o")){
		return {
			winner: board[0][2],
			winningLocations: [[0,0], [1,1], [2,2]]
		};
	}

	if(!board.toString().includes(' ')){
		return {
			winner: 'nobody' // nobody won, game over
		};
	}
return undefined;

};



let isX = true;
while(true){

	let location = nextMove(board, isX);
	if(makeMove(board, location, isX) === -1) {
		alert("There is a problem");
		break;
	}
	makeMove(board, location, isX);
	if(findWinner(board) === undefined) {
		alert("tie"+ findWinner(board[winner]));
		break;
	}else{
		alert("Game over, " + findWinner(board)["winner"] + " won!"
			+ findWinner(board)["winningLocations"]);
	}
	isX = !isX;
	
};
