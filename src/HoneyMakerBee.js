var HoneyMakerBee = function(color, age, job, honeyPot) {
  Bee.call(this, color);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//store 'makeHoney' method within use of a prototype chain
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};
//store 'giveHoney' method within use of a prototype chain
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};
