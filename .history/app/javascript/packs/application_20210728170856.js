// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

function showElementAnimation(){
  var element=document.getElementsByClassName('js-animation');
  if(!element) return;

  var showTiming=window.innerHeight>768 ? 200 : 40;
  var scrollY=window.pageYOffset;
  var windowH=window.innerHeight;

  for(var i=0;i<element.length;i++){
   
    var elemClientRect=element[i].getBoundingClientRect();
    var elemY=scrollY+elemClientRect.top;
    if(scrollY + windowH - showTiming > elemY){
      element[i].classList.add('is-show');
    }else if(scrollY + windowH < elemY){
      element[i].classList.remove('is-show');
    }
  }
}
scrollElementAnimation();
window.AddEventListener('scroo)

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
