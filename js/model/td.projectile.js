var TD = TD||{};

TD.Projectile = function (game, x , y , speed){
	Phaser.Sprite.call(this, game, x, y, 'projectile');
	this.speed = speed;
};


TD.Projectile.prototype = Object.create(Phaser.Sprite.prototype);
TD.Projectile.prototype.constructor = TD.Projectile;

/**
*	Vitesse du projectile
*/
TD.Projectile.prototype.update = function() {
	this.x += this.speed;
};

