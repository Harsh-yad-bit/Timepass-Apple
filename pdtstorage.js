
const cart = [
  {
    image: "productsource/watch-card-40-se-202603.jpeg",
    name: "Apple Watch SE 3",
    price: "From ₹3983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹25900.00",
    realPrice: 25900
  },
  {
    image: "productsource/watch-card-40-ultra3-202509_GEO_IN.jpeg",
    name: "Apple Watch Ultra 3",
    price: "From ₹13983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹89900.00",
    realPrice: 89900
  },
  {
    image: "productsource/watch-card-40-s11-202509_GEO_IN.jpeg",
    name: "Apple Watch Series 11",
    price: "From ₹7150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹46900.00",
    realPrice: 46900
  },
  {
    image: "productsource/mac-card-40-macbookpro-14-16-202410.jpeg",
    name: "MacBook Pro 14",
    price: "From ₹29983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹189900.00",
    realPrice: 189900
  },
  {
    image: "productsource/mac-card-40-macbook-neo-202603.jpeg",
    name: "MacBook Neo",
    price: "From ₹11150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹69900.00 Footnote ◊",
    realPrice: 69900
  },
  {
    image: "productsource/mac-card-40-macbook-air-202503.jpeg",
    name: "MacBook Air 13",
    price: "From ₹18817.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹119900.00 Footnote ◊",
    realPrice: 119900
  },
  {
    image: "productsource/mac-card-40-mac-studio-202503.jpeg",
    name: "Mac Studio",
    price: "From ₹34150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹214900.00 Footnote",
    realPrice: 214900
  },
  {
    image: "productsource/mac-card-40-imac-202410.jpeg",
    name: "iMac",
    price: "From ₹21650.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹134900.00 Footnote ◊",
    realPrice: 134900
  },
  {
    image: "productsource/iphone-card-40-17pro-202509.jpeg",
    name: "iPhone 17 Pro",
    price: "From ₹21650.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹134900.00 Footnote ±",
    realPrice: 134900
  },
  {
    image: "productsource/iphone-card-40-17e-202603.jpeg",
    name: "iPhone 17e",
    price: "From ₹11327.00/mo.per month with EMI Footnote †,or ₹64900.00 Footnote",
    realPrice: 64900
  },
  {
    image: "productsource/iphone-card-40-17air-202509.jpeg",
    name: "iPhone Air",
    price: "From ₹19150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹119900.00 Footnote ±",
    realPrice: 119900
  }
];
let htmlcode="";
cart.forEach((pdt)=>{
let html=`<div class=item><div class="pdtname">${pdt.name}</div>
      <div class="pdtimage"><img src="${pdt.image}"></div>
      <div class="buy">
        <h4 >${pdt.price}</h4>
       
      </div>
       <div data-name="${pdt.name}" 
       data-price="${pdt.realPrice}"  
       data-image="${pdt.image}" class="buybox">Buy</div>
       </div>`
      
  
       htmlcode+=html;
})
document.querySelector(".pdt").innerHTML=htmlcode;

let usercart = JSON.parse(localStorage.getItem("usercart")) || [];
document.querySelectorAll(".buybox").forEach((pdt)=>{
  pdt.addEventListener("click",(pdt)=>{
document.querySelector(".add").innerHTML=`<img src="like source/tick.svg">`
gsap.from(".add img",{
  y:"104%",
  opacity:0,
  scale:0,
  duration:2,
  ease:"power3.out",
  onComplete:()=>{document.querySelector(".add").innerHTML=``}
})
let found = false;

usercart.forEach((e) => {
  if (e.image === pdt.target.dataset.image) {
    e.quantity = (e.quantity || 1) + 1;
    found = true;
  }
});

if(!found){
  usercart.push({
    image: pdt.target.dataset.image,
    name: pdt.target.dataset.name,
  realPrice: pdt.target.dataset.price,
    quantity: 1
  });
  localStorage.setItem("usercart", JSON.stringify(usercart));
  renderCart();
}

console.log(usercart);
console.log(getTotal());
  })
})
function getTotal() {
  let total = 0;

  usercart.forEach((e) => {
    total += Number(e.realPrice) * Number(e.quantity);
  });

  return total;
}
function renderCart() {
  let cartHTML = `<h1>Cart</h1>`;

  usercart.forEach((e) => {
    cartHTML += `
      <div class="item">
        <div class="itemname">${e.name} (${e.quantity})</div>
        <div class="price">₹${e.realPrice}</div>
      </div>
    `;
  });

  cartHTML += `
    <div class="total">
      Total: ₹${getTotal()}
    </div>

    <button class="pay-btn">Pay Now</button>
  `;

  document.querySelector(".cartbox").innerHTML = cartHTML;

  document.querySelector(".pay-btn").addEventListener("click", () => {
    alert("Payment Successful 🎉");

    usercart = [];

    localStorage.removeItem("usercart");

    renderCart();
  });
}

let slide=false;
document.querySelector(".right2 img").addEventListener("click",()=>{
if(!slide){
renderCart();
  gsap.to(".cartbox",{
x:"0%",


  duration:2,
  ease:"power3.out",

})
slide=true;}
else {
 gsap.to(".cartbox",{
x:"105%",


  duration:2,
  ease:"power3.out",
              onComplete :()=>{   document.querySelector(".cartbox").innerHTML="";

  }})

slide=false;}

})
  document.querySelector(".pay-btn").addEventListener("click", () => {

  document.querySelector(".popup").style.display = "flex";

  usercart = [];
  localStorage.removeItem("usercart");
  renderCart();
});

document.querySelector(".close-popup").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});