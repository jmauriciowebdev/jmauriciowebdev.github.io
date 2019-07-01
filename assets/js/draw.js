const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;



const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup () {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    fruit.draw();


    

    window.setInterval (() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        snake.checkCollision();
        document.getElementById("score").innerText = snake.total;
        
        for (let i = 0; i <= canvas.width; i++){
            ctx.fillStyle = "brown";
            ctx.fillRect(i, 0, scale, scale);
            ctx.fillRect(0, i, scale, scale);
            ctx.fillRect(i, canvas.height-10, scale, scale);
            ctx.fillRect(canvas.width-10, i, scale, scale);
        }
    }, 150);
}());


window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))