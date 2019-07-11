class Shot {

    constructor(){
        this.r = 8;
        this.x = ship.x;
        this.y = height;
    }

    draw(x, y){
        fill(160);
        rectMode(CENTER);
        rect(x, y, this.r*2, this.r*2);
    }

    move(){
        this.y -= 1;
    }

}