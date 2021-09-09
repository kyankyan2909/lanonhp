document.getElementById("navbtn").onclick=function(){
  document.querySelector('html').classList.toggle('open')
  ;
}
const nav=document.getElementById("nav");
nav.onclick=function()=>{
  document.querySelector('html').classList.hide('open');
})