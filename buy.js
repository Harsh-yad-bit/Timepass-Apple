const interval = setInterval(() => {
  const viewer = document.querySelector('spline-viewer');

  if (viewer && viewer.shadowRoot) {
    const logo = viewer.shadowRoot.querySelector('#logo');

    if (logo) {
      logo.remove();
      clearInterval(interval);
    }
  }
}, 500);
let a=0;
document.querySelector(".right img").addEventListener("click",()=>{
    a++;
  if(a%2!==0){
  document.querySelector(".right img ").src="like source/img2.svg"}
  else {

  document.querySelector(".right img").src="like source/img1.svg"
  }

})
