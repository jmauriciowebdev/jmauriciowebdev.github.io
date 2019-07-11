let ship;
let shipdir = 0;
let aliens = [];
let shots = [];


function setup() {
    width = 400;
    height = 500;
    createCanvas(width,height);
    ship = new Ship;

    for (i=0 ; i<5; i++){
        aliens[i] = new Alien;
    }

}

function draw() {
    background(60);



    ship.draw();
    ship.move(shipdir);

    for (i=0 ; i<aliens.length; i++){
        aliens[i].draw(i*80);
    }

    for (i=0 ; i<shots.length; i++){
        shots[i].draw();
        shots[i].move();
    }
    
    
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        shipdir = -10;
        ship.move(shipdir);
    } else if (keyCode === RIGHT_ARROW){
        shipdir = 10;
        ship.move(shipdir);
    } else if (key == ' '){
        shots.push(new Shot);
    }
}

function keyReleased() {
    if (key != ' ') {
        shipdir = 0;
    }
}