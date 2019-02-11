function Bird() {
	this.x = 150;
	this.y = height/2;
	this.setD = 0;
	this.s = 15;
	this.dead = false;
	
	

	this.show = function() {
		noStroke();
		fill(255,255,0);
		//rect(this.x, this.y, this.s, this.s);
			
	}
	this.setDir = function(xdir) {
			this.setD = xdir;
			
	}
	
	this.move = function() {
		this.y += 3;
		this.y += this.setD;
	}

	this.hit = function() {
		this.dead = true;
		textSize(60);
		strokeWeight(5);
		fill(255, 10, 0);
		text('GAME \nOVER' , 70, 90);

	}

	

}