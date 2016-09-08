function copyToClipboard(element){
  //create hidden container
  var temp = document.createElement("input");
  //assign value of element to container
  temp.setAttribute("value", document.getElementById(element).innerHTML);
  //append it to body
  document.body.appendChild(temp);
  //highlight content
  temp.select();
  //execute copy command
  document.execCommand("copy");
  //remove it from body
  document.body.removeChild(temp);
}
