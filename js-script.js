/* my first javascript code practice   */

document.getElementById ("jshit") .style .backgroundColor = "navy";
document.getElementById ("jshit") .style .color = "white";

/* use the canvas div as the holding container for animations */

document.getElementById ("canvas");

var Ball = function(x,y){
  this.x = x;
  this.y = y;
  };

Ball.prototype.draw = function (){
  ellipse = (x, y, 25, 25);
  color = black;
  };
  
Ball.prototype.bounce = function () {
  for(i = 0; i > 375; i++);
  if(i === 375) {
    while( i < 25) {
      i--;
      }
    }
  x = x + i;
  y = y + i;
  };