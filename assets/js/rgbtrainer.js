var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var result = document.getElementById("pickedColor");
result.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("resetBtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");



easyBtn.addEventListener("click", function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    result.textContent = pickedColor;
    for (var i = 0; i < squares.length ; i ++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    result.textContent = pickedColor;
    for (var i = 0; i < squares.length ; i ++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
});


resetBtn.addEventListener("click", function(){
    resetBtn.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    result.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            message.textContent = "Correct";
            resetBtn.textContent = "Play Again?";
            h1.style.backgroundColor = pickedColor;
            for (var i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = pickedColor;
            }
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })
}

function pickColor(){
    var random = Math.floor(Math.random() * (squares.length));
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", "+ g + ", " + b + ")";
}