

const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelector(".p-btn")
const p_img_elem=document.querySelectorAll(".img-overlay")

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked=e.target;
    console.log(p_btn_clicked);

 if(!p_btn_clicked.classList.contains("p-btn"))return;   

 p_btn.classList.remove("p-btn-active"); 

p_btn_clicked.classList.add("p-btn-active");

const btn_num=p_btn_clicked.dataset.btnNum;
console.log(btn_num);


const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

 p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

 img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active")
 );

});



// swiper  section

var swiper = new Swiper(".mySwiper", {
    slidesPerView:2,
    spaceBetween: 30,
    autoplay:{
    delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const myJsmedia =(widthSize)=>{
    if(widthSize.matches){
      new Swiper(".mySwiper", {
        slidesPerView:1,
        spaceBetween: 30,
       
      });
    }else{
      new Swiper(".mySwiper", {
        slidesPerView:2,
        spaceBetween: 30,
       
      });

    }
    
  }

  const widthSize = window.matchMedia(" (max-width:780px)");

  myJsmedia(widthSize);

  widthSize.addEventListener('change',myJsmedia);






  // scroll button************************




// creating responsive nav bar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
})






 

const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter=()=>{
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCount)
       const startingCount = Number(counter.innerHTML);

       const incr = targetCount/5;
       if( startingCount<targetCount){
           counter.innerHTML=`${Math.round(startingCount+incr)}`;
           setTimeout(updateCounter,200)
       }else{
           counter.innerHTML=targetCount;
       }

    }


    updateCounter();

})


