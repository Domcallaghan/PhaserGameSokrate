var TD = TD || {};

TD.Case = function(game, x, y, key ){

   Phaser.Sprite.call(this, game, x, y, key);

};
TD.Case.prototype = Object.create(Phaser.Sprite.prototype);
TD.Case.prototype.constructor = TD.Case;
