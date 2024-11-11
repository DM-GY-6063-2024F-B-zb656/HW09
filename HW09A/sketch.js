
// original image, to use as reference for pixel colors
let oImg;

// display image, to modify and display on canvas
let mImg;

let slider1;
let pixelIsRed;

function preload() {
  oImg = loadImage("../assets/mondriaan.jpg");
  mImg = loadImage("../assets/mondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  oImg.resize(0, height);
  mImg.resize(0, height);

  // we'll read pixel color info from the oImg, so let's load its pixels
  oImg.loadPixels();

  // TODO: setup sliders and other DOM/html elements here
  slider1 = createSlider(0, 255, 255, 0);
  slider1.position(width/2 + 100, 100);
  slider1.size(200);

  slider2 = createSlider(0, 255, 0, 0);
  slider2.position(width/2 + 100, 200);
  slider2.size(200);
  
  slider3 = createSlider(0, 255, 0, 0);
  slider3.position(width/2 + 100, 300);
  slider3.size(200);
}

function draw() {
  // we'll modify and display the mImg object, so let's load its pixels
  mImg.loadPixels();

  // TODO: do any filtering and pixel modifications here.
  //       This involves a for loop of some kind.
  //       Remember to read from the oImg pixels and write to the mImg.
  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let redVal = oImg.pixels[idx + 0];
    let greenVal = oImg.pixels[idx + 1];
    let blueVal = oImg.pixels[idx + 2];
    let alphaVal = oImg.pixels[idx + 3];

    pixelIsRed = redVal > 2* greenVal && redVal > 2* blueVal && redVal > 100;

    if (pixelIsRed) {
      mImg.pixels[idx + 0] = slider1.value();
      mImg.pixels[idx + 1] = slider2.value();
      mImg.pixels[idx + 2] = slider3.value();
    }
   }
  // we'll display the updated mImg, so let's update its pixels
  mImg.updatePixels();

  // draw the display image
  image(mImg, 0, 0);
}
