let leaves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    leaves.push(new Leaf());
  }
}

function draw() {
  background(223);
  for (let leaf of leaves) {
    leaf.update();
    leaf.display();
  }
}

class Leaf {
  constructor() {
    this.x = random(width);
    this.y = random(-100, -10);
    this.size = random(5, 20);
    this.speed = random(1, 3);
    this.wind = random(-0.5, 0.5);
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;
    if (this.y > height + 10) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  display() {
    fill(255, 165, 0); // orange color
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
