let windowHeight = document.querySelector(".art").clientHeight;
let windowWidth = document.querySelector(".art").clientWidth;
let y = 100;

const s = function (p) {
  p.setup = function () {
    p.createCanvas(windowWidth, windowHeight);
    p.stroke(255);
    p.frameRate(180);
    p.background(0);
    
  };

  p.draw = function () {
    y -= 1;
    if (p.random() > 0.9) p.stroke(p.random(255), p.random(255), p.random(255));
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };

  // p.windowResized = function() {
  //     p.resizeCanvas(windowWidth, windowHeight);
  // }
};

new p5(s, "shapes");
