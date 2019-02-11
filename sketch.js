var bird;
var walls = [];
var canvas;
var img;
var d;
var score = 0;

function setup() {
	canvas = createCanvas(300,450);
	img = createImg('flappy.png'); 
	
	bird = new Bird;
	for (var i = 0; i < 20; i++){
		walls[i] = new Wall(i);
		walls[i].x +=50;
	}	
	
}

function draw() {
	background(51);
	
	image(img, bird.x, bird.y, img.width/1.7, img.height/1.7);
	bird.show();
	bird.move();

	for (var i = 0; i < walls.length; i++){
		walls[i].show();
		if (!bird.dead) {	walls[i].move();	}
		if (bird.x == walls[i].x ) {
			score++;
		}
		if ((bird.x <= walls[i].x + walls[i].thick/2) && (bird.x >= walls[i].x - walls[i].thick/2)) {
			if ((bird.y < walls[i].h) || (bird.y > (walls[i].h + walls[i].hole - bird.s))) {
				console.log('hit');
				bird.hit();
				
			}
		}
		
	}

	if (bird.y < 0 || bird.y > height){
		bird.hit();
				
	}
	textSize(30);
	fill(135,206,235);
	text('Score: ' + score, 10, 30);

	
}

function keyPressed() {
	if (!bird.dead) {
	if (keyCode == UP_ARROW) {
		bird.setDir(-13);
		//console.log(bird.y);
	}
	}
}
function keyReleased() {
		bird.setDir(0);
		//console.log(bird.y);
	
}