window.onscroll = ()=>{
    let nav = document.querySelector(".feature");
   let boder_node = nav.offsetTop;

   if(window.pageYOffset >= 10){
       nav.classList.add("boder_node");
   }
   else{
    nav.classList.remove("boder_node");
   }
}



const wrap_slide = document.querySelector(".history-scroll .history-scroll-container");

const item = document.querySelectorAll(".history-scroll-item");

let counter = 0;
const next_btn = document.querySelector(".btn-next");
const prev_btn = document.querySelector(".btn-prev");
const index_width = item[counter].clientWidth;
// prev_btn.style.opacity =  0;
// prev_btn.style.pointerEvents = "none";
wrap_slide.style.transform =' translateX('+ (-index_width * counter)+'px)' ;
next_btn.addEventListener("click" ,()=>{
    counter++;
    wrap_slide.style.transform =' translateX('+ (-index_width * counter)+'px)' ;
    wrap_slide.style.transition = "transform 0.3s ease-in-out";

    if(item[counter] ==  wrap_slide.length){
        counter = 0;
       wrap_slide.style.transition =" none";
     
    }

});


prev_btn.addEventListener("click" ,()=>{
    counter--
    wrap_slide.style.transform =' translateX('+ (-index_width * counter)+'px)' ;

    wrap_slide.style.transition = "transform 0.3s ease-in-out";
    if(item[counter] == wrap_slide[0]){
      counter  = item.length;
      wrap_slide.style.transition = "none";
    }

});





