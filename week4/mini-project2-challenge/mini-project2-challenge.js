function upload(){
 var fileinput = 
     document.getElementById("finput")
 var filename = fileinput.value;
 image = new SimpleImage(fileinput)
  greyImage = new SimpleImage(fileinput)
  redImage = new SimpleImage(fileinput)
  rbImage = new SimpleImage(fileinput)
  blurImage = new SimpleImage(fileinput)
  canvas = document.getElementById("can")
  image.drawTo(canvas)
}

function makeGray(){
  for (var pixel of greyImage.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +
               pixel.getBlue())/3
    pixel.setRed(avg)
    pixel.setGreen(avg)
    pixel.setBlue(avg)
    
  }
  
  var imgCanvas = document.getElementById("can")
  greyImage.drawTo(imgCanvas)
}

function makeRed(){
  for (var pixel of redImage.values()){
    x_r = pixel.getRed()
    x_g = pixel.getRed()
    x_b = pixel.getBlue()
    x_bar = (x_r+x_g+x_b)/3
    if (x_bar<128){
      pixel.setRed(2*x_bar)
      pixel.setGreen(0)
      pixel.setBlue(2*x_bar-255)
    }
    
    //pixel.setGreen(0)
    //pixel.setBlue(0)
  }
  var imgCanvas = document.getElementById("can")
  redImage.drawTo(imgCanvas)
}
 function flagFilter1() {
    h = rbImage.getHeight()
    w = rbImage.getWidth()
    for (var pixel of rbImage.values()){
      pix_x = pixel.getX()
      pix_Y = pixel.getY()
      if (pix_Y<h/3){
        //pixel.setRed(0)
        //pixel.setGreen(0)
        pixel.setBlue(200)
      }
      if (pix_Y>=h/3 && pix_Y<=2*h/3){
        pixel.setBlue(10)
        pixel.setGreen(10)
        pixel.setRed(10)
      }
      
      if (pix_Y>2*h/3){
        pixel.setRed(200)
        
      }
      
    }
   
  var imgCanvas = document.getElementById("can")
  rbImage.drawTo(imgCanvas)
  }
  
  


function imageIsLoaded() {
  if (image == null ||  image.complete()){
    return true
  }
}


function doGray() {
  if ( imageIsLoaded(image) ) {   
    makeGray();	                     
  }
}

function doRed() {
  if ( imageIsLoaded(image) ) {   
    makeRed();	                     
  }
}

function resetImage(){
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
  return;
}

function blurFilter(){
  randomPrime = Math.random()
  random_X = Math.floor(Math.random() * 100);
  random_Y = Math.floor(Math.random() * 100);
  width_blur = blurImage.getWidth()
  height_blur = blurImage.getHeight()
  
  blankImage  = new SimpleImage(width_blur,height_blur)
  for (var pixel of blankImage.values()){
    x_valblank = pixel.getX()
    y_valblank = pixel.getY()
    if (randomPrime <0.1){
      for (var pixblur of blurImage.values()){
        x_blur = pixblur.getX()
        y_blur = pixblur.getY()
        blur_red = pixblur.getRed()
        blur_green = pixblur.getGreen()
        blur_blue  = pixblur.getBlue()
        if (x_valblank==x_blur && y_valblank==y_blur){
          pixel.setRed(blur_red)
          pixel.setGreen(blur_green)
          pixel.setBlue(blur_blue)
        }
        
        
      }
      
    }
    else{
      for (var pixblur of blurImage.values()){
      x_blur = Math.min(pixblur.getX() + random_X, width_blur)
        y_blur = Math.min(pixblur.getY() + random_Y, height_blur)
        blur_red = pixblur.getRed()
        blur_green = pixblur.getGreen()
        blur_blue  = pixblur.getBlue()
        if (x_valblank==x_blur && y_valblank==y_blur){
          pixel.setRed(blur_red)
          pixel.setGreen(blur_green)
          pixel.setBlue(blur_blue)
        }
        
      
    }
    }
    
  }
   var imgCanvas = document.getElementById("can")
  blankImage.drawTo(imgCanvas)
}

