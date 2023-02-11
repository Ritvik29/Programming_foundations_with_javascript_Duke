function changeColor() {
  var divElement1 =
document.getElementbyId("div1");
  
  var divElement2 =
  document.getElementById("div2");
 divElement1.className = "blueback";
  divElement2.className = "orangeback";
  
}

function changeText(){
  var divElement1 = 
    document.getElementById("div1")
  var divElement2 = 
  document.getElementById("div2")
  
  var buttonElement = getElementById("b1")
  
  buttonElement.value = "test"
  
  divElement1.innerHTML ="Erste";
  
  divElement1.style.color = "red"
  
  divElement2.innerHTML="Zweite";
  divElement2.style.color = "orange"

}
