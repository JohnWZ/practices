var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			// 不确定当前选中的是哪个button，先把选中效果从两个button都移除
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			// 将选中效果增加到当前选中的button上
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color = clickedColor;
				resetButton.textContent = "Play Again?"
				// change all squares to clicked color
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				// fade the clicked square to background color if made a wrong guess
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
				messageDisplay.style.color = "black";
			}
		});
	}
}

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		// 取决于所选mode的colors.length = 3 || 6
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else { // hide buttom three squares when colors[i] === none
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

