function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function () {
        this.x = (Math.floor(Math.random() * rows - 2) + 2) * scale;
        this.y = (Math.floor(Math.random() * columns - 2) + 2) * scale;
        while (this.y >= 290 || this.y <= 10) {
            this.y = (Math.floor(Math.random() * columns - 2) + 2) * scale;
        }
        while (this.x >= 290 || this.x <= 10) {
            this.x = (Math.floor(Math.random() * columns - 2) + 2) * scale;
        }
    }
    
    this.draw = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}