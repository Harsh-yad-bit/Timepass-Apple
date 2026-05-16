
const cart=[
  {
    image:"productsource/watch-card-40-se-202603.jpeg",
    name:"Apple Watch SE 3",
    price:"From ₹3983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹25900.00 "
  },
  {
image:"productsource/watch-card-40-ultra3-202509_GEO_IN.jpeg",
name:"Apple Watch Ultra 3"
,
price:"From ₹13983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹89900.00 "
  },
   {
image:"productsource/watch-card-40-s11-202509_GEO_IN.jpeg",
name:"Apple Watch Series 11"
,
price:"rom ₹7150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹46900.00"


  },
   {
image:"productsource/mac-card-40-macbookpro-14-16-202410.jpeg",
name:"MacBook Pro 14"
,
price:"From ₹29983.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹189900.00  "

  },
   {
image:"productsource/mac-card-40-macbook-neo-202603.jpeg",
name:"MacBook Neo"
,
price:"From ₹11150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹69900.00 Footnote ◊"
  },
   {
image:"productsource/mac-card-40-macbook-air-202503.jpeg",
name:"MacBook Air 13"
,
price:"From ₹18817.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹119900.00 Footnote ◊"
  },
   {
image:"productsource/mac-card-40-mac-studio-202503.jpeg",
name:"Mac Studio"
,
price:"From ₹34150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹214900.00 Footnote "

  },

   {
image:"productsource/mac-card-40-imac-202410.jpeg",
name:"iMac"
,
price:"From ₹21650.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ±or ₹134900.00 Footnote ◊"
  },
   {
image:"productsource/iphone-card-40-17pro-202509.jpeg",
name:"iPhone 17 Pro"
,
price:"rom ₹21650.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹134900.00 Footnote ±"
  },
   {
image:"productsource/iphone-card-40-17e-202603.jpeg",
name:"iPhone 17e"
,
price:"From ₹11327.00/mo.per month with EMI Footnote †,or ₹64900.00 Footnote "
  },
   {
image:"productsource/iphone-card-40-17air-202509.jpeg",
name:"iPhone Air"
,
price:"From ₹19150.00/mo.Per Month with instant cashback Footnote ∆ and No Cost EMI Footnote ◊or ₹119900.00 Footnote ±"
  }
   

]
let htmlcode="";
cart.forEach((pdt)=>{
let html=`<div class="pdtname">${pdt.name}</div>
      <div class="pdtimage"><img src="${pdt.image}"></div>
      <div class="buy">
        <h4>${pdt.price}</h4>
       
      </div>
       <div data-name="${pdt.name}" 
       data-price="${pdt.price}"  
       data-image="${pdt.image}" class="buybox">Buy</div>`
      
  
       htmlcode+=html;
})
document.querySelector(".pdt").innerHTML=htmlcode;




