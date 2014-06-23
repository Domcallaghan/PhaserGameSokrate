
var w = 1024;
var h = 768;

window.onload = function () {

    var game = new Phaser.Game(w, h, Phaser.AUTO, "game");

    game.state.add('boot', Boot);
    game.state.add('preloader', Preloader);
    game.state.add('game', Game);
    game.state.add('mainmenu', MainMenu);
    game.state.add('gameover', GameOver);
    game.state.start('boot');
};
