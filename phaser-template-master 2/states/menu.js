/**
 * menu.js 
 *
 * This is the menu state
 */
const menuState = {

  /**
   * Loads game assets (images, sounds, tilemaps, etc)
   */
  preload : function () {
  },

  /**
   * Initializes variables and instantiates objects
   */
  create: function () {

    // Enable mouse
    game.input.mouse.capture = true;

    // Add some text
    game.add.text(
      80, 260,  // x, y position
      "Paused.  Click to resume the game.", 
      { fontSize: "32px", fill: "#fff" }
    );
  },

  /** 
   * Updates the screen each frame
   */
  update: function () {

    // Check for mouse click to switch state to the game state
    if (game.input.activePointer.leftButton.isDown) {
      game.state.start("game");
    }
  }
}; // end menuState


                         
