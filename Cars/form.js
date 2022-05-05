class Form{
    constructor(){
        this.title = createImg('TITULO.png')
        this.name = createInput('Name')
        this.playButton = createButton('Play')
        this.resetButton = createButton ('')
        this.greeting = createElement('h3')
    }

    hide(){
        this.name.hide()
        this.title.hide()
        this.greeting.hide()
        this.playButton.hide()
    }

    display(){
        this.title.position(width/2-850, 50)

        this.name.position(width/2-110, height/2-80)
        this.name.class('customInput')
        
        this.playButton.position(width/2-90, height/2-20)
        this.playButton.class('customButton')
        this.playButton.mousePressed(() => {
            this.name.hide()
            this.playButton.hide()

            player.name = this.name.value()
            this.greeting.html('Olá, '+ player.name)
            this.greeting.position(width/2-100, height/2-100)
            this.greeting.class('greeting')

            playerCount = playerCount + 1
            player.index = playerCount 
            player.updatePlayer()
            player.updatePlayerCount(playerCount)
        })

        this.resetButton.position(displayWidth-100, 20)
        this.resetButton.class('resetButton')
        this.resetButton.mousePressed(() => {
            game.updateGameState(0)
            player.updatePlayerCount(0)
            player.updatePlayers()
            player.updateCarsAtEnd(0)
        })
    }
}