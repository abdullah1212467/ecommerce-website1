import {tracpackage ,products}from './database.js'
let ali123
// console.log(tracpackage)
let src121="";
tracpackage.forEach((ali1,i)=>{
    let idel= ali1.cartel.productId
   let all121;
products.forEach((productly)=>{
 if(idel=== productly.id)
    all121=productly
})
let html8=`
<div class="div">
               
                <div class="div-2">
                    <div class="div-4" >Arriving on  ${ali1.day4}</div>
                    <div class="abdullah">${all121.name}</div>
                    
                    
                <div class="div-7">
                    <div class="div-1">
                        <img class="img-3-1" src="${all121.image}">
                    </div>
                    
                </div>
                <div class="rate">
                    <div class="rate-1">Preparing</div>
                    <div class="rate-2"> Shipped</div>
                    <div class="rate-3"> Delivered</div>
                 </div>
                <input class="input-range" type="range">
            </div>
           
        </div>
        
`
src121+=html8
// console.log(html8)
})
document.querySelector('.js-121').innerHTML=src121
{/* console.log(typeof tracpackage)
tracpackage.forEach((ali1,i)=>{

console.log(ali1.day4)
}) */}
let againvalue1=   JSON.parse(localStorage.getItem("amna"))

document.querySelector('.cart-num-2').innerHTML=againvalue1


