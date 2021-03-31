class Animation {
  constructor(x,y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.count=0;
    this.xoff=10;
  }
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0, 0);
    this.count++;
    this.xoff +=random(0.01);

  }
  
  applyForce(f){
    //this.acc.add(f);
  }
  display() {
    //background(0)
    push();
    //The only 3 transformations you need
    translate(windowWidth/2, windowHeight/2)
    scale(noise(this.xoff)%0.2)
    rotate(noise(this.xoff)/0.1)

    fill((this.pos.x *this.pos.x) % 225, (this.pos.y*this.pos.y) % 255, (this.pos.x *this.pos.y* 2) % 255);
    //stroke(this.pos.x)
    // textSize(this.pos.x % 20)
    rect(this.pos.x, this.pos.y, 100, 50)
    //ellipse(this.pos.x, this.pos.y, 100, 100)
    pop();

    
    
  }
}
