
function upload(){
 var fileinput = 
     document.getElementById("finput")
 var filename = fileinput.value;
 image = new SimpleImage(fileinput)
  greyImage = new SimpleImage(fileinput)
  redImage = new SimpleImage(fileinput)
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
    pixel.setGreen(0)
    pixel.setBlue(0)
  }
  var imgCanvas = document.getElementById("can")
  redImage.drawTo(imgCanvas)
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
