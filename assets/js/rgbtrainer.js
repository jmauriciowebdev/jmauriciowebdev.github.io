var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var result = document.getElementById("pickedColor");
result.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            message.textContent = "Correct";
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