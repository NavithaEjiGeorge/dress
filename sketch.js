function preload() {
  pinkI = loadAnimation("ready.png");
  redI = loadAnimation("mm.png");
  blueI = loadAnimation("blue .png");
  greenI = loadAnimation("green.png");
  K = loadImage("go.png")
}

function setup() {
  createCanvas(600,480);

  cindrella = createSprite(200, 150, 20, 20);
  cindrella.addAnimation("1", redI);
  cindrella.addAnimation("2", blueI);
  cindrella.addAnimation("3", pinkI);
  cindrella.addAnimation("4", greenI);

  red = createSprite(50, 330, 20, 20);
  red.shapeColor = "red"
  pink = createSprite(200, 330, 20, 20);
  pink.shapeColor = "pink"
  green = createSprite(150, 330, 20, 20);
  green.shapeColor = "green";
  blue = createSprite(100, 330, 20, 20);
  blue.shapeColor = "blue"
  
  go = createSprite(500,300,50,50);
  go.addImage(K);
  go.scale = 0.3;
}

function draw() {
  background("white");
  if (mousePressedOver(blue)) {
    cindrella.changeAnimation("2",blueI)
  }
  if (mousePressedOver(red)) {
        cindrella.changeAnimation("1",redI)
  }
  if (mousePressedOver(pink)) {
        cindrella.changeAnimation("3",pinkI)

  }
  if (mousePressedOver(green)) {
        cindrella.changeAnimation("4",greenI)
  }
 if(mousePressedOver(go)){
   text("click this text",300,480);
   link = createA("https://navithaejigeorge.github.io/nail-polish/","CLICK THIS TEXT TO PUT NAIL POLISH ");
   link.position  (200,200)
 }
  drawSprites();
  fill("red")
  textSize(15);
  text("NB : After getting the desired LIPSTICK click the GO button,Then you will receive a" ,20,420)
  text("CLICK HERE text,After getting the CLICK HERE text click on it to move to the next level",10,460)
  textSize(15);
  fill("brown");
  text("CLICK THE COLORS TO GET THE DESIRED LIPSTICK",100,380)
}
