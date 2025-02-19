// Welcome variables
let welcomeSound; 
let welcomeImg;

// Ships variables
let shipNames; // array of ship name strings
let shipImgs; // array of ship images



// destinations
let destImgs = [];
let destNames = [];


// Music Global Variables
let songs = []; // array of sound objects
let songNames = []; // array of strings of sound names
let currentSong; // currently playing sound object

function preload(){
  // Load Welcome content
  welcomeSound = loadSound("welcome-traveler.mp3")
  welcomeImg = loadImage("welcome_stars.jpg")
  
  // Prepare Ships
  let purpShip = loadImage("ships/purpleRocket.png")
  let ufoShip = loadImage("ships/ufo.png")
  // ensure the ship name is at the same index as its image
  shipImgs = [purpShip, ufoShip]
  shipNames = ["Purple Nebula", "Unidentified"]
  
  
  
  // Set   Locations
  // load images
  let earthImg = loadImage("destinations/earth.jpg")
  let marsImg = loadImage("destinations/mars.jpg")
  // store images
  destImgs = [earthImg, marsImg]
  // store associated name
  destNames = ["earth", "mars"]
  
  
  // Prepare songs
  let dubSound = loadSound("sounds/dub.wav")
  let runSound =loadSound("sounds/therun.mp3")
  songs = [dubSound, runSound]
  songNames = ["Dub", "The Run"]
  currentSong = songs[0] // just to give us a starting value 
}

function setup() {
  createCanvas(400, 400);
  
  // set up welcome sound
  welcomeSound.setVolume(0.5)
  welcomeSound.play() // play sound
  
  // display welcome image
  image(welcomeImg, 0,0,canvas.width,canvas.height)
}

function draw() {
  info()
}

function keyPressed(){
  if (key == 1){
    ship()  
  } else if (key == 2){
    destination()
  } else if (key ==3){
    music()
  }
    
}

function music(){
  // PLAY MUSIC
  // if there is music currently
  //   stop it
  
  // get index of a random song
  // get the song to play
  // set the volume of song
  // play the song
  
  // DISPLAY SONG NAME
  // clear the screen
  // get the song name
  // display the song name
   

  if (currentSong.isPlaying()){
    currentSong.stop()
  }
  let songIndex = int(random(songs.length))
  currentSong = songs[songIndex]
  
  currentSong.play()
  
  let curSongName = songNames[songIndex]
  background("black")
  stroke("black")
  fill("white")
  text("Now playing "+curSongName,0,height-100)

  
}

// present a random ship and name
function ship(){
  background("black")
  let shipIndex = int(random(shipImgs.length))
  stroke("black")
  fill("white")
  text("You're flying the "+shipNames[shipIndex],25,height-100)
  image(shipImgs[shipIndex],width/3, height/3, 150,150)
}

function destination(){
  let destIndex = int(random(destImgs.length))
  
  image(destImgs[destIndex],0,0,canvas.width,canvas.height)

  stroke("black")
  fill("white")
  text("Welcome to "+destNames[destIndex],50,height-100)
}

function info(){
  textSize(25)
  strokeWeight(5)
  stroke('black')
  fill("white")
  let msg = "Prepare for voyage\n"
  msg += "1. Change ship \n"
  msg += "2. Change destination\n"
  msg += "3. Change music"
  text(msg,30,30,canvas.width,canvas.height)
}


