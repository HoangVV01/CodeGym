/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed = 20){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
  }

  this.moveLeft = function () {
    this.left -= this.speed;
  }

  this.moveDown = function () {
    this.top += this.speed;
  }

  this.moveUp = function () {
    this.top -= this.speed;
  }

  this.increaseSpeed = function () {
    this.speed += 10;
  }

  this.decreaseSpeed = function () {
    this.speed = Math.max(1, this.speed - 10);
  }

}

var hero = new Hero('ralsei.jpg', 20, 30, 200);

function start() {
  document.getElementById('game').innerHTML = hero.getHeroElement();
}


document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowRight':
      hero.moveRight();
      break;
    case 'ArrowLeft':
      hero.moveLeft();
      break;
    case 'ArrowDown':
      hero.moveDown();
      break;
    case 'ArrowUp':
      hero.moveUp();
      break;
    case '+':
      hero.increaseSpeed();
      console.log('Speed increased to:', hero.speed);
      break;
    case '-':
      hero.decreaseSpeed();
      console.log('Speed decreased to:', hero.speed);
      break;
  }
  start();
});

start();