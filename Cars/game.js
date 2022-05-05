class Game{
    constuctor(){

    }

    getGameState(){
        var gameStateRef = dataBase.ref('gameState')
        gameStateRef.on('value', (info) => {
        gameState = info.val()
        })
    }

    updateGameState(state){
        dataBase.ref('/').update({
            gameState: state
        })
    }

    start(){
        if( gameState === 0){
            player = new Player()
            player.getPlayerCount()

            form = new Form()
            form.display()
        }

            car1 = createSprite(100,200)
            car1.addImage(img1)

            car2 = createSprite(300,200)
            car2.addImage(img2)

            car3 = createSprite(500,200)
            car3.addImage(img3)

            car4 = createSprite(700,200)
            car4.addImage(img4)
            
            cars = [car1, car2, car3, car4]
    }

    play(){
        form.hide()
        form.title.position(40, 50)
        form.title.class('gameTitleAfterEffect')

        player.getAllPlayers()
        player.getCarsAtEnd()

        if (allPlayers !== undefined){
            background('gray')
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)

            var index = 0;
            var x = 400;
            var y;

            for (var plyr in allPlayers) {
                index = index + 1
                x = x + 200;
                y = displayHeight - allPlayers[plyr].distance
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    stroke(10)
                    fill('red')
                    ellipse(x, y, 60, 60)
                    noStroke()
                    textSize(40)
                    fill('orange')
                    text(player.name, x, y-100)

                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y 
                }
            }
        }

        if(keyIsDown(UP_ARROW)){
            player.distance += 10
            player.updatePlayer()
        }

        if(player.distance > 5245){
            gameState = 2;
            player.ranking += 1
            player.updateCarsAtEnd(player.ranking)
        }

        drawSprites();
    }

    end(){
        console.log('game ended! Sua classificação foi: ', player.ranking)
    }
}