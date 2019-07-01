const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const highscore = document.getElementById("highscore");




const rows = canvas.height / scale;
const columns = canvas.width / scale;


var snake;

(function setup () {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    fruit.draw();
/*     if (localStorage.hs != 0) {
        highscore.innerText = "Your Current High Score is: " + localStorage.hs;
        snake.highscore = localStorage.hs;
    }; */
    // This area is commented out due to GitHub pages not supporting localStore


    

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
        if (snake.total > snake.highscore) {
            snake.highscore++;
            highscore.innerText = "Your Current High Score is: " + snake.highscore;
            // window.localStorage.setItem("hs", snake.highscore); GitHub pages does not support this feature
        }
        
        
        for (let i = 0; i <= canvas.width; i++){
            ctx.fillStyle = "brown";
            ctx.fillRect(i, 0, scale, scale);
            ctx.fillRect(0, i, scale, scale);
            ctx.fillRect(i, canvas.height-10, scale, scale);
            ctx.fillRect(canvas.width-10, i, scale, scale);
        }
    }, 100);
}());

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))