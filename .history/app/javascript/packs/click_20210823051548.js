document.getElementById("navbtn").onclick=function(){
  document.querySelector('html').classList.toggle('open')
  ;
}

document.querySelector("nav").onclick=function(){
  document.querySelector('html').classList.hide('open');
}