function doChange() {
  alert('clicked button with JS') ;
}

function Confirm() {
  let text = "Press a Button"
  if (confirm(text)==true){
    text = "You pressed OK"
  }
  else{
    text = "Are you sure you want to cancel?"
  }
 document.getElementById("demo").innerHTML = text;
  
}

function changeColor() {
  var divElement1 =
document.getElementById("div1");
  
  var divElement2 =
  document.getElementById("div2");
 divElement1.className = "blueback";
  divElement2.className = "orangeback";
  
  var canvas1 =  
  document.getElementById("div1")
  
  var canvas2 =  
  document.getElementById("div2")
  
  var ctx1 = canvas1.getContext("2d")
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
  
 var ctx2 =  canvas2.getContext("2d")
 ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
 
 
}

function doBlue() {
  var canvas = 
      document.getElementById("div1")
  canvas.style.backgroundColor = "blue";
  var context = canvas.getContext("2d");
  context.fillStyle = "yellow";
  context.fillRect(10,10,60,60)
  context.fillRect(80,10,60,60)
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hello",15,45)
  }


function doRed() {
  var canvas = 
      document.getElementById("div2")
  canvas.style.backgroundColor = "Red";
  var context = canvas.getContext("2d");
  context.fillStyle = "yellow";
  context.fillRect(20,20,60,60)
  context.fillRect(120,80,60,60)
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hello",150,45)
  }


function changeBackground() {
  var ctx1 = document.getElementById("div1")
  ctx1.style.backgroundColor = "white";
  
    var ctx2 = document.getElementById("div1")
  ctx2.style.backgroundColor = "white";
}
