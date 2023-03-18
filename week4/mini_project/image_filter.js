
var img = null;
var imgRed = null;
var imgGreen = null;
var imgBlue = null;
var imgGrey = null;
var imgRbow = null;
var imgBlur = null;
var imgReset = null;
var canvas;

function uploadImage() {
  var imgOrig = document.getElementById("imgUpload");
  img = new SimpleImage(imgOrig);
  imgRed = new SimpleImage(imgOrig);
  imgGreen = new SimpleImage(imgOrig);
  imgBlue = new SimpleImage(imgOrig);
  imgRbow = new SimpleImage(imgOrig);
  imgGrey = new SimpleImage(imgOrig);
  imgBlur = new SimpleImage(imgOrig);
  imgWin = new SimpleImage(imgOrig);
  canvas = document.getElementById("imgCanvas");
  img.drawTo(canvas);
  return;
}

function doRedFilter() {
  alert("Function: 'doRedFilter' Called ");
  for (var pixel of imgRed.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(avg * 2);
      pixel.setBlue(avg * 2);
    }
  }
  canvas = document.getElementById("imgCanvas");
  imgRed.drawTo(canvas);
  return;
}

function doGreenFilter() {
  alert("Function: 'doGreenFilter' Called ");
  for (var pixel of imgGreen.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(avg * 2);
      pixel.setBlue(0);
    } else {
      pixel.setRed(avg * 2);
      pixel.setGreen(255);
      pixel.setBlue(avg * 2);
    }
  }
  canvas = document.getElementById("imgCanvas");
  imgGreen.drawTo(canvas);
  return;
}

function doBlueFilter() {
  alert("Function: 'doBlueFilter' Called ");
  for (var pixel of imgBlue.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg * 2);
    } else {
      pixel.setRed(avg * 2);
      pixel.setGreen(avg * 2);
      pixel.setBlue(255);
    }
  }
  canvas = document.getElementById("imgCanvas");
  imgBlue.drawTo(canvas);
  return;
}

function doRainbowFilter() {
  var img_Y = imgRbow.getHeight()
  for (var pixel of imgRbow.values()) {
    var pix_Y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 7;

    if ((pix_Y < img_Y / 7) && (avg < 128)) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else if ((pix_Y < img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    }
    if ((pix_Y < 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0.8 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(1.2 * avg - 51);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }

    if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0.8 * avg);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(1.2 * avg - 51);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(1.6 * avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6 * avg);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(0.4 * avg + 153);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(0.4 * avg + 153);
    }
  }
  canvas = document.getElementById("imgCanvas");
  imgRbow.drawTo(canvas);
  return;
}

function doGreyScaleFilter() {
  // imgGrey = img;
  // imgCheck = imgGrey;
  // if (IsImageLoaded(imgGrey)) {
  //imgGrey = new SimpleImage(img);
  imageGreyMod(imgGrey);
  var canvas = document.getElementById("imgCanvas");
  imgGrey.drawTo(canvas);
  // } else {
  // alert( " Skipped Greyscale Processing" );
  //}

  return;
}

function resetImage() {
  var canvas = document.getElementById("imgCanvas");
  img.drawTo(canvas);
  return;
}

function IsImageLoaded(imgTemp) {
  // alert("Function: 'IsImageLoaded' Called");
  if (imgTemp == null || !imgTemp.complete()) {
    alert("Image Not Loaded");
    uploadImage();
  }
  return;
}

function imageGreyMod() {
  for (var pixel of imgGrey.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  return imgGrey;
}

function clearImage() {
  var imgTemp = document.getElementById("imgCanvas");
  var clearImg = imgTemp.getContext("2d");
  clearImg.clearRect(0, 0, imgTemp.width, imgTemp.height);
  return;
}

function doBlurFilter() {
 for(var pixel of imgBlur.values()){
    var rndm = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
  if(rndm < 0.5){
     imgBlur.setPixel(x,y,pixel);
     }
  else{
     getnewPixel(x,y);
    }
  }
  imgBlur.drawTo(canvas);
  return;
}

function getnewPixel(x,y){
  var h = imgBlur.getHeight();
  var w = imgBlur.getWidth();
  var rndmX = Math.floor(Math.random()*10);
  var rndmY = Math.floor(Math.random()*10);
  if(rndmX > w-1){
    rndmX = w-1;
  }
  else if(rndmX < 0){
    rndmX = 0;
  }
  if(rndmY > h-1){
    rndmY = h-1
  }
  else if(rndmY < 0){
    rndmY = 0;
  }
  var newPixel =      imgBlur.getPixel(rndmX,rndmY);
 imgBlur.setPixel(x,y,newPixel);
  return;
}

function setBorder(pixel) {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
    return(pixelBorder);
}


function doWindowPaneFilter() {
   var w = imgWin.getWidth();
  var h = imgWin.getHeight();
  var th = w*0.0125
  var xx = (w-4*th)/3;
  var yy = (h-3*th)/2;
  for (var pixel of imgWin.values()) {
    if (pixel.getY() < th || pixel.getY() >= h-th) {
      setBorder(pixel);
      }
    if (pixel.getX() < th || pixel.getX() >= w-th ) {
      setBorder(pixel);
      }
    if (pixel.getX() > xx && pixel.getX() < xx+th ) {
      setBorder(pixel);
      }
    if (pixel.getX() > 2*xx+th && pixel.getX() < 2*xx+2*th ) {
      setBorder(pixel);
      }
    if (pixel.getY() > yy && pixel.getY() < yy+th) {
      setBorder(pixel);
    }
  }
  imgWin.drawTo(canvas);
  return;
}
