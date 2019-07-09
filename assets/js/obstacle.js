class Obstacle {
	constructor() {
		this.r = 100;
		this.x = width;
		this.y = height - this.r;
	}

	move() {
		this.x -= 10;
	}
	show() {
		image(oImg1, this.x, this.y, this.r, this.r);
	}

	offscreen() {
		if (this.x < -this.r) {
			score++;
			return true;
		} else {
			return false;
		}
	}
}
