class Player {
	constructor() {
		this.r = 100;
		this.x = 50;
		this.y = height - this.r;
		this.vy = 0;
		this.gravity = 0.7;
		this.i = 0;
	}
	show() {
		image(pimages[this.i], this.x, this.y, 100, 100);
		this.i++;
		if (this.i > 42) {
			this.i = 0;
		}
	}

	move() {
		this.y += this.vy;
		this.vy += this.gravity;
		this.y = constrain(this.y, 0, height - this.r);
	}
	jump() {
		if (this.y == height - this.r) {
			this.vy = -20;
		} else {
			this.vy = 20;
		}
	}
	hits(obs) {
		let x1 = this.x + this.r * 0.5;
		let y1 = this.y + this.r * 0.5;
		let x2 = obs.x + obs.r * 0.5;
		let y2 = obs.y + obs.r * 0.5;
		died = true;

		return collideCircleCircle(x1, y1, this.r, x2, y2, obs.r);
	}
}
