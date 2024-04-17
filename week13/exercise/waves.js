let circles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    circles.push(new Circle(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
    this.angle = random(TWO_PI);
    this.speed = random(0.01, 0.05);
    this.phase = random(TWO_PI);
  }

  update() {
    // Update position using sine wave
    this.x += sin(this.angle) * 2;
    this.y += sin(this.angle + this.phase) * 2;

    // Update angle for smooth oscillation
    this.angle += this.speed;
  }

  display() {
    // Draw circle
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}