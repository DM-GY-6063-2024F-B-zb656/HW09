
// original image, to use as reference for pixel colors
let oImg;

// display image, to modify and display on canvas
let mImg;

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
}

function draw() {
  // we'll modify and display the mImg object, so let's load its pixels
  mImg.loadPixels();

  // TODO: do any filtering and pixel modifications here.
  //       This involves a for loop of some kind.
  //       Remember to read from the oImg pixels and write to the mImg.
  for (let idx = 0; idx < oImg.pixels.length; idx += 4) {
    let redVal = oImg.pixels[idx + 0];
    let greenVal = oImg.pixels[idx + 1];
    let blueVal = oImg.pixels[idx + 2];
    let alphaVal = oImg.pixels[idx + 3];

    let pixelIsRed = redVal > 2* greenVal && redVal > 2 * blueVal && redVal > 128;
    //update this with a varaible like 'mondrian red?'

    let pixelIsBlue = blueVal > greenVal && blueVal > redVal && blueVal > 100;
    //okay this gets pretty much all the blie pixels but its also fucked up the whites a bit.
    // you could make a thing for if a pixel is close enough to white just make it PURE white?

    let pixelIsWhite = redVal > 100 && greenVal > 100 && blueVal > 100;
    //i think that did it?

    let pixelIsBlack = redVal < 100 && greenVal < 100 && blueVal < 100;
// i think that worked

    //eventually make all these into a proper if/else
    if (pixelIsRed) {
      alphaVal = 0;
      mImg.pixels[idx + 3] = alphaVal;
    } //okay this mostly makes the red transparent
    //but we need to make a variable that gets ALL red.

    if (pixelIsBlue) {
      alphaVal = 0;
      mImg.pixels[idx + 3] = alphaVal;
    }

    if (pixelIsWhite) {
      mImg.pixels[idx + 0] = 255
      mImg.pixels[idx + 1] = 255
      mImg.pixels[idx + 2] = 255
    }

    if (pixelIsBlack) {
      mImg.pixels[idx + 0] = 0
      mImg.pixels[idx + 1] = 0
      mImg.pixels[idx + 2] = 0
    }

    //can we make it so theres a slider. in the first third of the slider it makes
    //the yellow become transparent revealing an image.
    //then in the second third it makes the blue transparent
    //then in the last third it makes the red transparent. 
  }

  // we'll display the updated mImg, so let's update its pixels
  mImg.updatePixels();

  // draw the display image
  image(mImg, 0, 0);
}
