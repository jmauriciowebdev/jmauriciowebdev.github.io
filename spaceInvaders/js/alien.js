class Alien {

    constructor(){
        this.r = 16;
        this.x = width/2;
        this.y = 0+this.r*1.5;
    }

    draw(xarg){
        fill(160);
        rectMode(CENTER);
        rect(xarg, this.y, this.r*2, this.r*2);
    }

}