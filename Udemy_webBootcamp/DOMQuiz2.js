var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input[type='number']")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var goal = Number(document.querySelector("#goal").textContent);

p1button.addEventListener("click", function(){
    if (!gameOver) {
        p1score++;
        if (p1score === goal) {
            // add CSS effect to the winner
            p1display.classList.add("winner");
            gameOver = true;
        }
    }
    p1display.textContent = p1score;
});

p2button.addEventListener("click", function(){
    if (!gameOver) {
        p2score++;
        if (p2score === goal) {
            p2display.classList.add("winner");
            gameOver = true;
        }
    }
    p2display.textContent = p2score;
});

resetButton.addEventListener("click", reset);

function reset() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    // remove CSS effect
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");

    gameOver = false;
}

numInput.addEventListener("change", function(){
    goal = Number(numInput.value);
    if (goal < 1) {
        goal = 1;
    }
    document.querySelector("#goal").textContent = goal;
    // set the game back to 0 to 0 whenevery we set the max score
    reset();
});

