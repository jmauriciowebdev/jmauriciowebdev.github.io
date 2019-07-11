class Ship {

    constructor(){
        this.r = 16;
        this.x = width/2;
        this.y = height-this.r*1.5;
        this.dir = shipdir;
    }

    draw(){
        fill(160);
        rectMode(CENTER);
        rect(this.x, this.y, this.r*2, this.r*2);
    }

    move(dir){
        if (this.x < width){
            this.x += dir;
        } else {
            this.x = width - 10;
        }
        if (this.x > 0){
            this.x += dir;
        } else {
            this.x = 1;
        }

        
    }

}