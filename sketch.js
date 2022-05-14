var dataBase;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var form, player, game;
var car1, car2, car3, car4, cars
var img1, img2, img3, img4, bg
var ground, track;

function preload(){
    img1 = loadImage ('car1.png')
    img2 = loadImage ('car2.png')
    img3 = loadImage ('car3.png')
    img4 = loadImage ('car4.png')

    ground = loadImage ('ground.png')

    track = loadImage ('track.jpg')

    bg = loadImage ('planodefundo.png')

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    dataBase = firebase.database()

    game = new Game()
    game.getGameState()
    game.start()


}

function draw(){
    background(bg)

    if(playerCount === 4){
      game.updateGameState (1)
    }

    if(gameState === 1){
        game.play()
    }

    if(gameState === 2){
        game.end()
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}