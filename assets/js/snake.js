function Snake() {
    this.x = 150;
    this.y = 150;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.highscore = 0;
  
    this.draw = function() {
      ctx.fillStyle = "Green";
      for (let i=0; i<this.tail.length; i++) {
        if (i % 2 == 0){
          ctx.fillStyle = "Chartreuse";
        }
        else {
          ctx.fillStyle = "Green";
        }
        ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
      }
      ctx.fillStyle = "DarkGreen";
      ctx.fillRect(this.x, this.y, scale, scale);
    }
  
    this.update = function() {
      for (let i=0; i<this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i+1];
      }
  
      this.tail[this.total - 1] =
        { x: this.x, y: this.y };
  
      this.x += this.xSpeed;
      this.y += this.ySpeed;
  
      if (this.x >= canvas.width-10) {
        this.x = 10;
      }
  
      if (this.y >= canvas.height-10) {
        this.y = 10;
      }
  
      if (this.x <= 0) {
        this.x = canvas.width -10;
      }
  
      if (this.y <= 0) {
        this.y = canvas.height -10;
      }
    }
  
    this.changeDirection = function(direction) {
      switch(direction) {
        case 'Up':
            if (this.ySpeed !== scale * 1 ){
                this.xSpeed = 0;
                this.ySpeed = -scale * 1; 
            }
          break;
        case 'Down':
            if (this.ySpeed !== -scale * 1){
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
            }
          break;
        case 'Left':
            if( this.xSpeed !== scale * 1){
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
            }
          break;
        case 'Right':
            if ( this.xSpeed !== -scale * 1 ){
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
            }
          break;
      }
    }
  
    this.eat = function(fruit) {
      if (this.x === fruit.x &&
        this.y === fruit.y) {
        this.total++;
        return true;
      }
  
      return false;
    }
  
    this.checkCollision = function() {
      for (var i=0; i<this.tail.length; i++) {
        if (this.x === this.tail[i].x &&
          this.y === this.tail[i].y) {
          this.total = 0;
          this.tail = [];
          return true;
        }
      }
    }
  }
  