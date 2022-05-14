class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.ranking = null;
    }

    getPlayerCount(){
        var playerCountRef = dataBase.ref('playerCount')
        playerCountRef.on('value', (info) => {
            playerCount = info.val()
        })
    }

    updatePlayerCount(count){
        dataBase.ref('/').update({
            playerCount: count
        })
    }

    updatePlayer(){
        var playerIndex = 'players/player' + this.index 
        dataBase.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    updatePlayers(){
        dataBase.ref('/').update({
            players: undefined 
        })
    }

    getAllPlayers(){
        var allPlayersRef = dataBase.ref('players')
        allPlayersRef.on('value', (info) => {
            allPlayers = info.val()
        })
    }

    getCarsAtEnd(){
        var carsAtEndRef = dataBase.ref('carsAtEnd')
        carsAtEndRef.on('value', (info) => {
            this.ranking = info.val()
        })
    }

    updateCarsAtEnd(rank){
        dataBase.ref('/').update({
            carsAtEnd: rank   
        })
    }
}