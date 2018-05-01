/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
var game;

var mainState = {
    // Here we add all the functions we need for our state
    // For this project we will just have 3 functions
    preload: function () {
        // This function will be executed at the beginning
        // That's where we load the game's assets
        game.load.image('logo', 'missionbit.png');
    },
    create: function () {
        // This function is called after the preload function
        // Here we set up the game, display sprites, etc.

        // Create a game sprite from the logo image positioned
        // at the center of the game world
        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        // The position of the sprite should be based on the
        // center of the image (default is top-left)
        this.sprite.anchor.setTo(0.5, 0.5);
        // Change background color to a gray color
        game.stage.backgroundColor = '#999999';
    },
    update: function () {
        // This function is called 60 times per second
        // It contains the game's logic
        
        // Rotate the sprite by 1 degrees
        this.sprite.angle += 1;
    }
};

// Initialize Phaser
game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');
