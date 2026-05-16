let menu=false;

document.querySelector(".right").addEventListener("click",()=>{
  if(!menu){
  document.querySelector(".rightpart").innerHTML=`<div class="store">Store</div>
      <div class="airpod"><a href="index.html">Airpod</a></div>
      <div class="macbook"><a href="macbook.html">Macbook</a></div>
      <div class="product"><a href="product.html">Product</a></div>
        <div class="about">About</div>
          <div class="contact">Contact</div>`
       
             gsap.from(".rightpart div",{
            y:-10,
            duration:0.4,
            ease:"power3.out",
            opacity:0,
             stagger:0.07,
          })
          menu=true;}
        
else{
     gsap.to(".rightpart div",{
            y:-10,
            duration:0.4,
            ease:"power3.in",
            opacity:0,
            stagger:0.07,
            onComplete :()=>{   document.querySelector(".rightpart").innerHTML="";

            }
          })
        
             menu=false;}})


