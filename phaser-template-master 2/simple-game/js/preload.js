var preload = function(game){}
preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(250,100,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.game.load.image("gametitle","../simple-game/assets/gametitle.png");
        this.game.load.image("play","../simple-game/assets/play.png");
        this.game.load.image("gameover","../simple-game/assets/gameover.png");
         this.game.load.image('player', '../simple-game/assets/player.png');
        this.game.load.image('wall', '../simple-game/assets/wall.png');
        this.game.load.image('coin', '../simple-game/assets/coin.png');
        this.game.load.image('lava', '../simple-game/assets/lava.png');
	},
  	create: function(){
		this.game.state.start("gametitle");
	}
}
