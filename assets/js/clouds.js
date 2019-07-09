class Cloud {
	constructor() {
		this.r = 100;
		this.x = width;
		this.y = random(180);
	}

	move() {
		let cspeed = 2;
		this.x -= cspeed;
	}
	show() {
		image(cImg, this.x, this.y, this.r, this.r);
	}
	show2() {
		image(cImg2, this.x, this.y, this.r, this.r);
	}
}
