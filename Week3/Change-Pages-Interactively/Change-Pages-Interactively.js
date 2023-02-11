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
document.getElementbyId("div1");
  
  var divElement2 =
  document.getElementById("div2");
 divElement1.className = "blueback";
  divElement2.className = "orangeback";
  
}.
