const ballAmount = 10;
let balls = [];

let client;
let connect;

function setup() {
  createCanvas(innerWidth, innerHeight);

  initOSC();
  
  background(200);
  frameRate(30);
  
  for (let i = 0; i < ballAmount; i++) {
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
    balls[i].resize();
  }
}
/**
 * initialize OSC client and the connection to the OSC server
 */
function initOSC(){
  connect = new Connect();

  connect.connectToServer(function () {
    client = new Client();

    client.startClient("10.0.1.55", 9000);
  });
}