//school game variables
var guessersceneNum = 0;
var num = 0;
var guess = 0;
var tries = 0;

//work game variables
var man;
let workimg, workimg2;
let rock;
let rocks = [];
let worksceneNum = 0;

//entire game variables
let x = 0;
let y = 0;
let m;
let sNum=0;
let img1, img2, img3, img4;
let locs = [];
let t = [];

let img = [];
function preload() {
  img[0] = loadImage("school.png");
  img[1] = loadImage("house.png");
  img[2] = loadImage("work.jpeg");
}

function guessersetup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function scene1setup() {
  createCanvas(400, 400);

	//obstacel as a rock
  for (let i = 0; i < 2000 ; i++) {
    rocks[i] = new Obstacle(workimg2, random(50),random(5));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
		locs.push(new Location(img[0], width/6, height/4));
		locs.push(new Location(img[1], width/3, height*0.60));
		locs.push(new Location(img[2], width*0.60, height/4));

 
 // m Animation();
  for (let i=0; i < 1000; i++) {
    t.push(new Animation(random(width),random(height)));
  }
	
	workimg = loadImage("worker.webp");
  workimg2 = loadImage("betterpapers.jpeg");
  bgd = loadImage("street.jpeg");
  man = new Person(workimg);
  rock = new Obstacle(workimg2);

  
}

function guesserstart() { 
	sNum = 4;
	guessersceneNum = 1; 
	num = 0; 
	guess = 0; 
	tries = 0; 
	background(0); 
	textSize(30); 
	fill(255, 20, 200); 
	text("Figure out the number to pass the math test!", width*0.30, height/2); 
	fill(255);
	textSize(20);
	text("Click anywhere to begin", width*0.40, height/2 + 100);
} 

function guessercorrect() { 
	guessersceneNum = 3; 
	background(0); 
	fill(255); 
	textSize(20); 
	text("Correct! You got it in " + tries + " tries!", width*0.40, height/2-50); 
} 

function guesser() { 
	guessersceneNum = 2; 
	background(0); 
	
	num = floor(random(1,100)); 
	var myprompt = "Enter a guess between 1 and 100"; 
	while(guess != num) { 
		
		guess = prompt(myprompt); 
		tries++; 
		
		if (guess > num) { 
			myprompt = "Too high! Guess again!"; 
		} 
		if (guess < num) { 
			myprompt = "Too low! Guess again!"; 
		} 
		if (guess == num) { 
			guessercorrect(); 
		} 
		else if (guess == null) { 
			guess = num; 
			guessersceneNum = 0; 
		} 
	} 
	
	//play again button
	fill(20, 20, 200);
	rect(width*0.40, height/2, 200, 100, 10);
	fill(255);
	textSize(20);
	text("Play again", width*0.40+20, height/2+50);
	
	//choose location button
	fill(200, 20, 20);
	rect(width*0.40, height/2+120, 200, 100, 10);
	fill(255);
	textSize(20);
	text("Choose Location", width*0.40+20, height/2+180);
} 

function house() {
	sNum = 3;
	
	fill(255);
	textSize(25);
	text("Home is where you relax, and here you can do just that! Kick up your feet and use the mouse to draw whatever you please!", 25, 50);
	
	if (mouseIsPressed) {
	noStroke();
	fill(random(250), random(250), random(250));
	ellipse(mouseX, mouseY, 15, 15);
	}
	
	//choose location button
	fill(255);
	rect(width-220, height-120, 200, 100, 10);
	textSize(20);
	fill(0);
	text("Choose Location", width-200, height-60);
	
}


function scene1() {
	sNum = 5;
  worksceneNum = 1;
  
  background(20, 20, 200);
  fill(255, 20, 100);
  textSize(40);
  text("Oh No!", 100, 100);
  textSize(20);
  text("You're late for work and you just", 60, 150);
	text("dropped your papers all over the street!", 40, 170);
  fill(255);
  textSize(14);
  text("Press the space key to jump and grab all the papers.", 40, 220);
  text("Your work building is 3km away, can you make", 30, 255);
	text("it without losing too many papers?", 50, 275);
  text("Be careful! The road is full of sink", 50, 310);
	text("holes, don't fall below the screen!", 50, 330);
  text("Press the space key to begin.", 120, 370);
}








function distanceComplete() {
  worksceneNum = 4;
  background(20, 20, 100);
	
	if (man.score >= 70) {
		fill(250, 250, 100);
 		textSize(40);
  	text("You made it!", 50, 200);
		textSize(22);
		text("Great job!", 85, 240);
		textSize(20);
		text("You got to work", 100, 270);
		text("on time with most of your papers!", 100, 295);
	} else if (man.score < 70) {
			fill(250, 250, 100);
			textSize(40);
			text("Uh oh!", 90, 240);
			textSize(20);
			text("You made it to work but left too many", 40, 270);
			text("papers on the road and your boss fired you!", 10, 295);
		}
		
 //return to street button
	fill(255, 0, 50);
  rect(150, 300, 100, 50, 10);
	//rect(300, 350, 100, 50, 10);
  fill(0);
  textSize(12);
  text("Choose Location", 155, 320);
	
	
}

function lose() {
  worksceneNum = 3;
  background(20, 20, 100);
  fill(250, 250, 100);
  textSize(40);
  text("Fired!", 120, 200);
  textSize(20);
  text("Oh no! You didn't make it to work", 60, 250);
	text("on time and your boss fired you :(", 60, 290);
  
  //play again button
  rect(150, 300, 100, 50, 10);
  fill(0);
  textSize(15);
  text("Play Again", 165, 330);
	
	//return to street button
	fill(255, 0, 50);
	rect(300, 350, 100, 50, 10);
  fill(0);
  textSize(12);
  text("Choose Location", 305, 370);
}

function workgame() {
  worksceneNum = 2;
   background(bgd);

  //point of view around "man"
  translate((-man.pos.x + 50), 0);

  let gravity = createVector(0, 0.8);
  man.applyForce(gravity);


  //the player
  man.update();
  man.display();
  man.edges();

  //an obstacle as a rock
  rock.update();
  rock.display();
  rock.edges();

  //obstacle as a rock
  for (let i = 0; i < rocks.length; i++) {
    rocks[i].update();
    rocks[i].display();
    rocks[i].edges();
    man.hits(rocks[i]);
  }
  

}







function draw() {
  //frameRate(10)
  //background(220);
  //animation();
  //mover.update();
  // m.display();
  // m.update();
  //game();
	//start();
  //ani();
	
  if(sNum==0 || sNum == 1){
     start();
     ani();   
   }
	
	else if (worksceneNum == 1) {
    scene1();
  } else if (man.pos.y > height) {
    lose();
  } else if (worksceneNum == 2 && man.pos.x < 3000) {  
    workgame();
  } else if (man.pos.x >= 3000) {
    distanceComplete();
  } 
	else if (sNum == 3) {
		house();
	}
} 


function start(){
	sNum = 1;
  background(0);
  fill(255);
  textSize(30);
  text("Welcome to\nDraw. Work. Learn.", x + 100, y + 100);
  textSize(20);
  text("Press the space key to begin", windowWidth/2 - 100, windowHeight - 100);
	
}

function street(){
  sNum = 2;
  background(0, 90, 20);
  textSize(30);
  text("Choose a location", windowWidth/3, windowHeight/7);
  
  //location images
  for (let i = 0; i < locs.length; i++) {
    locs[i].display();
  }
}

function ani(){
    for (let i=0; i < t.length; i++) {
    t[i].display();
     t[i].update();
  }
}


function mouseClicked() { 
  debugger
	//work game (click office)
	if (sNum == 2 && mouseX >= width*0.60 && mouseX <= width*0.60 + 200 && mouseY >= height/4 && mouseY <= height/4 + 130) {
		scene1setup();
		scene1();
		
	} //drawing game (click house)
	else if (sNum == 2 && mouseX >= width/3 && mouseX <= width/3 + 200 && mouseY >= height*0.60 && mouseY <= height*0.60 + 130) {
		background(100,50,50);
		house();
	}
	//guesser game (click school)
	else if (sNum == 2 && mouseX >= width/6 && mouseX <= width/6 + 200 && mouseY >= height/4 && mouseY <= height/4 + 130) {
		guesserstart();
	}
	// work play again buttons
 else if (worksceneNum == 3 && mouseX >= 150 && mouseX <= 250 && mouseY >= 300 && mouseY <= 350) {
		scene1setup();
	 	scene1();
  } 
	//guesser play again buttons
	else if (guessersceneNum == 0 && sNum == 4 && mouseX >= width*0.40 && mouseX <= width*0.40 + 200 && mouseY >= height/2 && mouseY <= height/2+100) {
			guesserstart();
		} else if (guessersceneNum == 3 && sNum == 4 && mouseX >= width*0.40 && mouseX <= width*0.40 + 200 && mouseY >= height/2 && mouseY <= height/2+100) {
			guesserstart();
		} 
	//work choose location buttons (back to street)
		else if (worksceneNum == 3 && mouseX >= 300 && mouseX <= 400 && mouseY >= 350 && mouseY <= 400) {
			setup();
			street();
		}
		else if (worksceneNum == 4 && mouseX >= 150 && mouseX <= 250 && mouseY >= 300 && mouseY <= 350) {
			setup();
			street();
		} 
	//house choose location
	else if (sNum == 3 && mouseX >= width-220 && mouseX <= width-20 && mouseY >= height-120 && mouseY <= height-20) {
					street();
				}
	//guesser choose location buttons
		else if (guessersceneNum == 0 && sNum == 4 && mouseX >= width*0.40 && mouseX <= width*0.40 + 200 && mouseY >= height/2+120 && mouseY <= height/2+220) {
			street();
		} else if (guessersceneNum == 3 && sNum == 4 && mouseX >= width*0.40 && mouseX <= width*0.40 + 200 && mouseY >= height/2+120 && mouseY <= height/2+220) {
			street();
		} 
		//guesserscenes
		else if (guessersceneNum == 1 && sNum == 4) { 
			guesser(); 
		} 
}

function keyPressed() {
  if (sNum == 1 && key == " ") {
    street();
  }
	else if (worksceneNum == 1 && key == ' ') {
    man.pos.y = 150;
    man.pos.x = 0;
    man.score = 0;
    workgame();
  }
  else if (worksceneNum == 2 && key == ' ') {
    let force = createVector(0, -16);
    man.applyForce(force);
  } 
}

function animation() {
  
  push();
  //The only 3 transformations you need
  translate(width / 2, height / 2)
  scale((random(x)) / 2000)
  rotate(x / 2000)

  fill((x + 30) % 255, (x + 100) % 225, (x * 8) % 255);
  stroke(x)
  textSize(x % 20)
  rect(100, 100, 100, 100)
  pop();
  x++;
}


