function setup() {
  createCanvas(600, 600);
background("purple");
}

function draw() {
 
  stroke("black")
 fill("white")

  
   if(mouseIsPressed){
     rect(mouseX,mouseY,20,30);
   }
}
