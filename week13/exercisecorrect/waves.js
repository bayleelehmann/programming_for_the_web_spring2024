var pos;

function setup() {
  createCanvas(windowHeight,windowWidth)
  angleMode(DEGREES)
  pos = 0.0
  inc = 3.0

  pos2 = 0.0
  inc2 = 7.0

  pos3 = 0.0
  inc3 = 6.0
}

function draw() {
  background(192, 59, 55)
  stroke(192, 59, 55)
  noFill()
  strokeWeight(1)
  clear()
  translate(width/2, height/2)

  var mySinVal = sin(pos)
  var mySinVal2 = sin(pos2)
  var mySinVal3 = sin(pos3)

  amplified = mySinVal * 50
  amplified2 = mySinVal2 * 50
  amplified3 = mySinVal3 * 50

  for (x = 0; x <= 360; x = x + 1) {
    curve(amplified, 500, 500, 100, amplified, 100, 100, 5000)
  
    rotate(x)
  }

  pos = pos + inc
  pos2 = pos2 + inc2
  pos3 = pos3 + inc3

}