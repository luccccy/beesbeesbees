var Bee = function(food, age, color, job) {
  Grub.call(this, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// set the prototype;
Bee.prototype = Object.create(Grub.prototype);
// set the constructor;
Bee.prototype.constructor = Bee;

