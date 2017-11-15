



const printDimond = function(height, character){ //dimond with recursion

	if(height%2 ===0){ //Checking even or odd
		height = height - 1;
	}

	const writer = function(num, character){  //function which draws characters of given number
		if(num<=0){
			return "";
		}
		return character + writer(num-1, character);
	};

	const dimondChecker = function (spaceNum, chNum, lineNum){

		if(lineNum > height){
			return "";
		}

		console.log(writer(spaceNum, " ") + writer(chNum, character));

		if(lineNum <= height/2 ){
			dimondChecker(spaceNum-1, chNum+2, lineNum+1);

		}else if(lineNum > height/2){
			dimondChecker(spaceNum+1, chNum-2, lineNum+1)
		}
	};

	return dimondChecker((height-1)/2, 1, 1);

};

printDimond(7, "a");






const printDimond = function(h, character){
	if(h%2 === 0){
		h = h-1;
	}

	const writer = function(n, character){
		let k = "";

		for(let i = 0; i<n; i++){

			k = k + character;
		}
		return k;
	};

	let spaceNum = (h-1)/2;
	let chNum = 1;
	for(let i = 1; i<=h; i++){
	  
	  console.log(writer(spaceNum, " ") + writer(chNum, character));
	  if(i<=h/2){
			spaceNum = spaceNum-1 ;
			chNum = chNum + 2;
		}else if(i>h/2){
			spaceNum++;
			chNum = chNum-2;
		}
		
		
		

	}
};
printDimond(7, "a");





