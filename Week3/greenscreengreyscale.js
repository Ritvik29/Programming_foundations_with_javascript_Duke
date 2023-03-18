var image;

function upload(){
 var fileinput = 
     document.getElementById("finput")
 var filename = fileinput.value;
  alert("You chose" + filename)
  image = new SimpleImage(fileinput)
  var canvas = document.getElementById("can")
  image.drawTo(canvas)
}

function makeGray(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +
               pixel.getBlue())/3
    pixel.setRed(avg)
    pixel.setGreen(avg)
    pixel.setBlue(avg)
    
  }
  var imgCanvas = document.getElementById("can")
  image.drawTo(imgCanvas)
}
