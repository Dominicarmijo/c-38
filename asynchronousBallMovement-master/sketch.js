var database,playerCount,form,game,player,allPlayers
var gameState=0
var car1,car2,car3,car4,cars


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.getState()
  game.start()
  }

function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if (gameState===1){
    clear()
    game.play()
  }
}

