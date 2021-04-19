var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY=-5
    ball.velocityX=5

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1)
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2)
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.velocityX=0
        ball.velocityY=0
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(block4)
    }

    drawSprites();
}
