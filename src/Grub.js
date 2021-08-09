var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

//store the method of eat within a prototype chain;
Grub.prototype.eat = function() {};
