let d1;
let d2;
let ducks;
let snacks = [];
function setup() {

  createCanvas(600, 600);
  d1 = new Duck(200, 350, "Duckula")
  d2 = new Duck(400,234, "Quackers")
  ducks = [d1, d2]
}
function draw() {
  background(194, 217, 255); // Light blue background
  d1.display();
  d2.display();
  
  let snIdx = 0
  while(snIdx < snacks.length){
    snacks[snIdx].show();
    snIdx += 1
  }
  // let fresh = new Snack(50,50)
  // fresh.show()
  // let eaten = new Snack(50,100)
  // eaten.isEaten = true
  // eaten.show()
}

function mousePressed(){
  let sn = new Snack(mouseX, mouseY);
  snacks.push(sn)
  //for every duck
  for(let idx=0; idx<ducks.length; idx+=1){
    let curDuck = ducks[idx];
    if(curDuck.isOnDuck(mouseX,mouseY)){
      curDuck.duckSize += 10;
      sn.isEaten = true;
      print(curDuck.nm,"ate a treat!")
    }
  }
}

// Duck class
class Duck {
  
  constructor(x,y,givenName) {
    this.nm = givenName;
    this.locx = x;
    this.locy = y;
    this.duckSize = 30;
  }

  display() {
    fill("yellow");//255, 204, 0); // Yellow
    
    // Head
    ellipse(this.locx, this.locy, this.duckSize);
    
    // Beak
    fill(255, 165, 0);
    ellipse(this.locx+this.duckSize/2, this.locy, this.duckSize, this.duckSize/4);
  
    // Eyes
    fill(0);
    ellipse(this.locx, this.locy-this.duckSize/4, 5, 5);
    
    // Label
    noStroke()
    textSize(15) 
    text(this.nm, this.locx, this.locy+this.duckSize/2+15)
    stroke("black")
  }

  isOnDuck(clickX, clickY){
    let d = dist(clickX, clickY, this.locx, this.locy);
    let result = d < this.duckSize/2; 
    return result;
  }  

}

class Snack{
  constructor(x,y){
    this.locx = x;
    this.locy = y;
    this.isEaten = false
  }
  
  show(){
	let snackSize = 10
	// snack shape
	fill("brown")
	rect(this.locx-snackSize , this.locy-snackSize -5, snackSize *2, 5)
	fill('red')
  	triangle( this.locx-snackSize , this.locy-snackSize ,
           	this.locx+snackSize , this.locy-snackSize,
           	this.locx, this.locy+snackSize/2);
	if(this.isEaten){
	  // bite shape
  	  noStroke();
  	  fill('yellow');
  	  ellipse(this.locx, this.locy, snackSize , 13);
  	  stroke("black");
  }
}


}




