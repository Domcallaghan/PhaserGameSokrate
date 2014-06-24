var TD = TD||{};

TD.Line = function (game){
	this.game= game;
	this.cases = [];
	this.life = 1 ;
	

};

/**
*	Ajouter une case à la ligne
*/
TD.Line.prototype.addCase = function(c) {
	this.cases.push(c) ;

};

/**
*	Supprime la dernière case du tableau
*/
TD.Line.prototype.removeCase = function() {
	this.cases.pop();

};

/**
*	Renvoie vrai si life = 0
*/
TD.Line.prototype.isDead = function() {
	if (this.life == 0){
		return true;
	}
	else{
		return false;
	}
	
};

/**
*	Affiche chaque case à l'écran
*/
TD.Line.prototype.display = function(){
	this.cases.forEach(function(c){
		c.display();
	});
};

