Preloader = function (game) {
};

Preloader.prototype.preload = function(){
 //preload images for the game
     this.game.load.image('projectile', 'assets/bullets.png');
     this.game.load.image('grass', 'assets/grass_rectangle.png');
    };

Preloader.prototype.create = function () {
        this.game.state.start('mainmenu');
    };
