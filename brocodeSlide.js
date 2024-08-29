// image slider
const slides =document.querySelectorAll(".slides img");
let slideIndex =0;
let IntervalId =null;
// initializer
document.addEventListener("DOMContentLoaded",initializeSlide);
function initializeSlide(){
   
if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    IntervalId=setInterval(NextSlide,5000);
}
}

function showSlide(index){
    if(index>=slide.length){
        
    }
slides.forEach(slide=>{
    slideIndex.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide")
}
function PrevSlide(){

}
function NextSlide(){

}
