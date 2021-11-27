
let obj1, obj2;
let walkers = [];
var min_size = 5;
var max_size = 50;
let canvas;
let img;
function preload() {
  img = loadImage('img/img1.jpg');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');

    for(var i=0; i<=10; i++){
        let obj = new Zooming(width/2, height/2, random(min_size,max_size));
        walkers.push(obj);
     }
     //background(200);
}



var counter = 0;
function draw() {
  //background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  if(counter == 3){
    objCreate();
    counter = 0;
  }
  counter++;
  
  for(var i=walkers.length-1; i>=0; i--){
    walkers[i].update();
    walkers[i].show();
    if(!walkers[i].inCanvas){
      walkers.splice(i, 1);
    }
  }
}

function objCreate(){
      //let obj = new Zooming(width/2, height/2, random(min_size,max_size));
      let obj = new Zooming(mouseX, mouseY, random(min_size,max_size));
      walkers.push(obj);
}