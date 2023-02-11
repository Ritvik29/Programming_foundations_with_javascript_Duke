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
