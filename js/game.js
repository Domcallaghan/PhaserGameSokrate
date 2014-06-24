Game= function(game){};

// tes var 
Game.prototype.preload = function()
{
};
Game.prototype.create = function()
{

	var projectile1 = new TD.Projectile(this.game, 100 ,100 , 5);
	this.game.add.existing(projectile1);
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

