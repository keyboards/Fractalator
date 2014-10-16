function copmlexNumber(real,img){
  this.real=real;
  this.img=img;
  this.getMagnitude=function(){
    return real*real+img*img;
  }
}
