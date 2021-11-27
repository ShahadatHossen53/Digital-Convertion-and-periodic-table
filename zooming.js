class Zooming{
  constructor(x, y, size){
    this.pos = createVector(x, y);
     
    this.size  =0;
    this.speed = random(5);
    this.val = createVector();
    //this.val.mult(this.speed);
    this.acc = p5.Vector.random2D();
    this.acc.setMag(0.001*size);
    this.mx = x;
    this.my = y;
    this.inCanvas = true;
  }
  
  update(){
    
    //this.pos.add(this.dir);
    //this.dir.mult(this.size/5);
    //console.log(this.dir);
    this.val.add(this.acc);
    this.pos.add(this.val);
    this.size+= this.acc.mag()*10;
    
    
    if((this.pos.x < -this.size || this.pos.x >width+this.size) || (this.pos.y < -this.size || this.pos.y-this.size >height) ){
      this.inCanvas = false;
    }
    
  }
  
  show(){
    var gray_value = map(this.size, 0, 50, 0, 255);
    //fill(237, 98, 241, 50);
    fill(20, 100, 199, 50);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
  }
}
