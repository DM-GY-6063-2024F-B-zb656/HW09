let mCamera;

function preload() {
  mCamera = createCapture(VIDEO);
  mCamera.size();
  mCamera.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(180, 200, 255);

  mCamera.loadPixels();

  let rectDim = 10;
  noStroke();

  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      let pixX = map(x, 0, width, 0, mCamera.width);
      let pixY = map(y, 0, height, 0, mCamera.height);
      let pixIdx = int(pixY) * mCamera.width + int(pixX);
      let p5Idx = 4 * pixIdx;

      let redVal = mCamera.pixels[p5Idx + 0];
      let greenVal = mCamera.pixels[p5Idx + 1];
      let blueVal = mCamera.pixels[p5Idx + 2];

      let redInvert = 255 - redVal;
      let greenInvert = 255 - greenVal;
      let blueInvert = 255 - blueVal;

      if (x == mouseX && y == mouseY) {
        fill(redVal, greenVal, blueVal);
      } else {
        fill(redInvert, greenInvert, blueInvert);
      }
      rect(x, y, rectDim);
    }
  }
}
