class Location {
  constructor(pic, x, y) {
	this.pos = createVector(x, y);
  //this.x = width/6;
	//this.y = height/4;
  this.size = createVector(200, 130);
  this.img = pic;
  }

  display() {
    image(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }
  
}
