Game= function(game){};

// tes var 
Game.prototype.preload = function()
{
};
Game.prototype.create = function()
{
    console.log('toto');
    var c = new TD.Case(this.game, 100,100,'grass');
    this.game.add.existing(c);
};
Game.prototype.update = function()
{

};
Game.prototype.render = function() {
    // Input debug info
};

