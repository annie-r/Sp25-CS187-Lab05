let dafDuck;
let quackDuck;

let ducks = [];
let snacks = [];
function setup() {
  createCanvas(600, 600);

  // Create multiple duck objects
  dafDuck = new Duck(100,100, "Daffy")
  print(dafDuck.nm)
  quackDuck =  new Duck(250,245, "Duckula")
  print(quackDuck.nm)
  ducks = [dafDuck, quackDuck]
  

  
  
}
function draw() {
  background(194, 217, 255); // Light blue background
  // Update and display each duck
  //dafDuck.display()
  //quackDuck.display()
  let idx = 0
  while(idx < ducks.length){
    let curDuck = ducks[idx];
    curDuck.display();
    idx += 1;
  }
  

  
}

function mousePressed(){
  let newSnack = new Pizza(mouseX,mouseY)
  snacks.push(newSnack)
  for(let duck of ducks){
    if(duck.isOnDuck(mouseX, mouseY)){
      duck.duckSize += 10;
      newSnack.isEaten = true;
      print(duck.nm,"ate a treat")
    }
  }
  
}

class Pizza {
  
  constructor(x,y){
    this.locx = x;
    this.locy = y;
    this.isEaten = false;
  }
  
  drawFullPizza(){
    
  }
  
  drawEatenPizza(){
    
  }
  
  show(){
    let snackSize = 10
    
    fill("brown")
    rect(this.locx-snackSize , this.locy-snackSize -5, snackSize *2, 5)
    fill('red')
      triangle( this.locx-snackSize , this.locy-snackSize ,
               this.locx+snackSize , this.locy-snackSize,
               this.locx, this.locy+snackSize /2)
    if(this.isEaten){
      noStroke()
      fill('yellow')
      ellipse(this.locx, this.locy, snackSize , 13)
      stroke("black")
    } 
  }
  
}

// Duck class
class Duck {
  
  constructor(x,y,givenName) {
    this.nm = givenName;
    this.locx = x;
    this.locy = y;
    this.duckSize = 40;
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
    let label = this.nm 
    text(label, this.locx, this.locy+this.duckSize/2+15)
    stroke("black")
  }

  isOnDuck(clickX, clickY){
    let d = dist(clickX, clickY, this.locx, this.locy);
    let result = d < this.duckSize/2; 
    return result;
  }  

}






