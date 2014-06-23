GameOver = function (game) {
};

GameOver.prototype.preload = function(){

};
GameOver.prototype.create = function(){
    this.game.add.text(250, 16, 'Perdu', { fill: '#ffffff' });

};
GameOver.prototype.listener = function(){

    this.game.state.start('boot');
};