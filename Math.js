var c;
//Copmlex number that the set is bassed on
var NUM_ITERATIONS=256;
//The number of iteration the calculate Color function goes through until finnally decidng a point is in the set


function copmlexNumber(real,img){
  this.real=real;
  this.img=img;
  this.getMagnitude=function(){
    return real*real+img*img;
  }
  /*
  * Returns the product of the two complex numbers
  * @param n, the other copmlex number
  */
  this.multiplyNum=function(n){
    var real=0;
    var img=0;
    real+=n.real*this.real;
    real-=n.img*this.img
    img+=n.img*this.real;
    img+=this.img*n.real;
    return new copmlexNumber(real,img);
  }
  /*
  * Returns the sum of the two complex numbers
  * @param n, the other copmlex number
  */
  this.addNum=function(n){
    var real=0;
    var img=0;
    real+=this.real+n.real;
    img+=this.img+n.img;
    return new complexNumber(real,img);
  }
}
/*
 *Color of a paticular point
 * @param point, a copmlex number that represents the location of the pixel being tested
 * Currently returns an integer 256=black=in set, 255-0= not in set, closer to 0 is more red 
 */
function calculateColor(point){
    for(var i=0;i<NUM_ITERATIONS;i++){
      point=point.multiplyNum(point).addNum(c);
    }
}
