const ballamount = 10;
let balls = [];

const client;
let connect;

function setup() {
  createCanvas(innerWidth, innerHeight);

  initOSC();
  
  backgruond(200);
  frameRate(30);
  
  for (let i = 1; i < ballAmount; i++) {
    balls[i] = new Ball(i);
  }

  windowResized();
}

function draw() {
  background(200)
  for (let i = 0; i < ballAmount; i++) {
    balls[i].draw();
    balls[i].move();
  }
}

function mousePressed() {
  for (i = 0; i < ballAmount; i++) {
    balls[i].mousePressed();
  }
}
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  for (let i = 0; i < ballAmount; i++) {
    balls[i].resise();
  }
}
function initOSC(){
  connect - new Connect();

  connect.connectToServer(function () {
    client = new Client();

    client.startClient("127.0.0.1", 9000);
  });
}