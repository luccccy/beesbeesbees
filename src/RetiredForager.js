var RetiredForagerBee = function(food, age, job, canFly, color) {
  ForagerBee.call(this, food);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

// set the prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// set the constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//a forage method
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
//an always winning gamble method;
RetiredForagerBee.prototype. gamble = function(treasure) {
  this.treasureChest.push(treasure);
};