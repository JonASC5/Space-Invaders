//Jon

function setup(){
    createCanvas(500, 500);
    background("black");
}

let x = 245;
let y = 450;
let i = 50;
let moving = false;

function draw(){
    background("black");
    fill("red");
    rect(x, 450, 15, 30);
    ellipse(50, 50, 50, 50)
    if (keyIsDown(LEFT_ARROW) && x > 3){
        x -= 3;
    }

    i = 50;
    while(i < 500 ) {
        fill("red");
        ellipse(i, 50, 50, 50);
        i+=50;
    }

    if (keyIsDown(RIGHT_ARROW) && x < 483) {
        x+= 3;
    }

    if (moving == true){

    }
     //    fill("red");
     //   rect(x, y, 15, 30);
        
     //if (keyPressed(SHIFT));
      //   fill ("red");
      //   rect(x, y, 15, 30);
       // y += 3
    }   

function keyPressed(){
    if(keyCode === SHIFT){
        moving = true;
    }
}