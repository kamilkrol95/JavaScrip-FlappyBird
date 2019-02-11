function Wall(i) {
	this.x = 400;
	this.h = random(40,300);
	this.thick = 30;
	this.hole = random(100,120);
	this.index = i;
	this.x += 180*this.index;
	this.y;

	this.y = (this.h + this.hole)/2;
	this.show = function() {
		noStroke();
		fill(0,102,0, 200);
		rect(this.x, 0, this.thick, this.h);
		rect(this.x, this.h + this.hole, this.thick, height - (this.h + this.hole));
	}

	this.move = function() { 
		this.x += -2;
	}
}