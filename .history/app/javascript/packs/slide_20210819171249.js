const btn=document.getElementByClassName("btns");
const preBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener('click',()=>{
    const slide=document.querySelector('slide ul').children;
    const indicator=document.querySelector(".indicator").children;

    const lastSlideIndex=slide.length - 1;
    const firstSlideIndex=0;
    const lastIndicatorIndex=indicator - 1;
    const firstIndicatorIndex=0;

    const lastSlideItem=slide.item(lastSlideIndex);
    const firstSlideItem=slide.item

  })
}