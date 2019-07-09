let player;
let oImg1; //obstacle
let oImg2; //obstacle
let oImg3; //obstacle
let bImg; //background
let cImg; //cloud
let cImg2; //cloud
let sImg; //sun
let obstacles = [];
let clouds = [];
let pimages = []; //This array will hold the player animation frames
let pjimages = [];
let currentImageIndex = 0;

let gameStarted = false;
let died = false;
let score = 0;
let hscore = 0;

function preload() {


	for (let i = 0; i < 43; i++) { // Get the running player images
		pimages[i] = loadImage('assets/images/hero/run/run_' + i + '.png'); //adding the frames to the player animation array
	}
	for (let i = 0; i < 36; i++) { // Get the jumping player images
		pjimages[i] = loadImage('assets/images/hero/jump/jump_' + i + '.png'); //adding the frames to the player animation array
	}

	oImg1 = loadImage('assets/images/obstacles/spikes.png');
	oImg2 = loadImage('assets/images/obstacles/cactus.png');
	oImg3 = loadImage('assets/images/obstacles/rock.png');
	bImg = loadImage('assets/images/bg/background.png');
	cImg = loadImage('assets/images/bg/cloud-1.png');
	cImg2 = loadImage('assets/images/bg/cloud-2.png');
	sImg = loadImage('assets/images/bg/sun.png');
}

function setup() {
    createCanvas(800, 450);
	player = new Player();
}

function keyPressed() {
	if (key == ' ') {
		player.jump();
	}
	if (keyCode === ENTER) {
		gameStarted = true;
	}
}

function mousePressed() {
	player.jump();
	gameStarted = true;
}

function draw() {
	if (gameStarted === true) {


		if (random(1) < 0.01) {
			if (obstacles.length < 3) {
				obstacles.push(new Obstacle());
			}
		}
		if (random(1) < 0.005) {
			clouds.push(new Cloud());
		}

		background(bImg);
		fill(86, 93, 105);
		rect(0, 440, 800, 10);
		player.show();
		player.move();


		for (let c of clouds) {
			c.move();
			c.show();
		}
		for (let o of obstacles) {
			if (o.offscreen()) {
				obstacles.splice(0, 1);
			}

			if (player.hits(o)) {
				hscore = score;
				score = 0;
				clear();
				obstacles = [];
				gameStarted = false;
				break;
			}
			o.move();
			o.show();
		}
	} else {
		clear();
		fill(0, 0, 0);
		if (died === false) {
            background(bImg);
            textSize(20);
			text('Use the spacebar key to jump,', 220, 50);
			text('you can press it again to fall down faster.', 220, 75);
			text('Press enter to start running!', 220, 150);
		} else {
			background(bImg);
            text('Try again, press enter to start running!', 220, 90);

		}
    }
    fill(0, 0, 0);
    text('Score:' + score, 700, 50);
}
