
function setup() {
  createCanvas(600, 600);
  
}
function draw() {
  background(194, 217, 255); // Light blue background
  
}

// Duck class
class Duck {
  
  constructor(x,y,givenName) {
    this.nm = givenName;
    this.locx = x;
    this.locy = y;
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






