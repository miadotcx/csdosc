let lily = new Lilypond();

function setup() {
  //plaats hier de code die maar één keer hoeft te worden uitgevoerd
  createCanvas(800,600);
  background(255);
  lily.setTempo(10);
  lily.createScore();
}

function draw() {
  //plaats hier de code die continue herhaald moet worden.
}