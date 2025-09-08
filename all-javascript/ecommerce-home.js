import { products ,cart ,localstore , ordersummery} from "./database.js";
// import { infoarray } from "./information.js";



export let infoarray=[]
function ali11111(){
    localStorage.removeItem('info')
  localStorage.setItem("info",JSON.stringify(infoarray))

localStorage.removeItem('orders');
let src=''
products.forEach((product)=>{
   // 
let html =`
<div class="card ">
    
     <div class="card-1">
     <div class="ccccc1">
     <a href="information-page.html">
        <img class="img-4 js-img " data-ali5="${product.id}" src="${product.image}">
        </a>
        <div class="posital">Click for detail</div>
        </div>
     </div>
     <div class="name ">
        ${product.name}
     </div>
     <div class="ratting-1">
        <div class="ratting">
            <img class="img-rating " src="${product.ratting.stars}">
            
        </div>
        <div class="ratting-in-numb">${product.ratting.numb}</div>
     </div>
     <div class="price">₹${product.price}</div>
     <div>
        <select class="option option-js" data-ali2="${product.id}">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
     </div>
     <div class="added" data-ali1="${product.id}">
       <div></div>
     </div>
     <div>
        <button  class="add-to-cat add-js" data-ali="${product.id}">Add to cart</button>
     </div>
    </div>`
    src+=html
})
document.querySelector('.js-main-grid').innerHTML=src




document.querySelectorAll('.add-js').forEach((buttl)=>{


    // let option1=document.querySelectorAll('.option-js').value
buttl.addEventListener('click',()=>{
   let productid1= buttl.dataset.ali
   if(productid1){
      cart.push({
          productId: productid1,
          quantity: 1,
          way:'1'
      })


   

     
   }
   cart.forEach((bl1)=>{
      document.querySelectorAll('.option-js')
            .forEach((ak1)=>{
               let productid2= ak1.dataset.ali2
               if(productid1===productid2){
              let converts=  JSON.parse(ak1.value)          
                 if(productid2===bl1.productId){
                 bl1.quantity=converts;
               //   console.log(converts)
                 }
               }
               
            })
   })
   // if(productid1){
   //             cart.push({
   //                 productId: productid1,
   //                 quantity: 1,
   //                 way:'1'
   //             })


              
   //          }

            let div =` <div> <img class="add" src="images/icons/checkmark.png"></div><div class="add-1">Added</div>`
             let div1 =` <div> <img class="add" src="images/icons/checkmark-white.png"></div><div class="add-1-1">Added</div>`
      
            document.querySelectorAll('.added').forEach((all)=>{
               let productid11= all.dataset.ali1
               if(productid1===productid11){
                  all.innerHTML=div
                  setTimeout(()=>{
                     all.innerHTML=div1
                  },3000)
               }
// all.innerHTML=div
            })
        localstore()
        let quality=0;
      // console.log(quality)
        cart.forEach((bl1)=>{
         quality+=bl1.quantity;
         localStorage.setItem("amna",JSON.stringify(quality))
            // document.querySelector('.js-cart').innerHTML=quality
            let amna1= JSON.parse(localStorage.getItem("amna"))
document.querySelector('.js-cart').innerHTML=amna1
                
           
            
            })
           
   //  console.log(cart)
    }) 
})
let amna1= JSON.parse(localStorage.getItem("amna"))
let amallia;
if(amna1 === null){
   amallia=0
   }else{
       amallia=amna1
   }

document.querySelector('.js-cart').innerHTML=amallia
console.log(amna1)







// console.log(document.querySelectorAll('.js-img'))

document.querySelectorAll('.js-img').forEach((all)=>{
   all.addEventListener('click',()=>{
      
  //////////////make our get intractive when we click it/////////
  localStorage.removeItem('info')
  localStorage.setItem("info",JSON.stringify(infoarray))
//////////////////////////////////
let prodvctiddl= all.dataset.ali5
   //  console.log(prodvctiddl)
products.forEach((order)=>{
  if(order.id===prodvctiddl){
   // console.log('ali')
      if(infoarray.length===0){
          infoarray.push(order.image)
         //  console.log('ali1')
          localStorage.setItem("info",JSON.stringify(infoarray))
          
      }
      
     
     
   
  }
 })
     
   })
  
// all.innerHTML=div
})
}

ali11111()
















// function all121(){

//    let ali21= JSON.parse(localStorage.getItem("info"))
//    // console.log(ali21)
//    let mlq;
// //   let alk1=  JSON.parse(ali21)
// let srcal=''
// ali21.forEach((el)=>{
// mlq=el
// let mol
//    products.forEach((element)=>{
//    // console.log( element.image)
//    if( element.image ===mlq ){
//    mol=element
//    }
//    // console.log(mol)

//    })
  
//   console.log( `
// <div class="div-1 ">
// <div class="div-2">
//       <div class="div-3">
//         <img class="img-321" src="${mol.image}">
//       </div>
//       <div class="image-grid">
//         <div class="small-img">
//             <img class="img-322" src="${mol.image}">
//         </div>
//         <div class="small-img">
//             <img class="img-322" src="${mol.image}">
//         </div>
//         <div class="small-img">
//             <img class="img-322" src="${mol.image}">
//         </div>
//       </div>
//       <div class="name-1">${mol.name}  </div>
//       <div class="ratting"> Ratting : (${mol.ratting.numb})</div>
//       <div class="price"> Price: ₹ ${mol.price}</div>
//       <div><button class="add-to-cart" data-id="${mol.id}">Add to cart</button></div>
//     </div>
//     </div>
// `)
// srcal+=html10
// console.log(html10)
// })

  
//  console.log(srcal)

    
// // console.log(html10)
// //  document.querySelector('.main-dives')=html10
// //console.log( document.querySelectorAll('.main-dives1212'))
// console.log(document.querySelector('.main-dives1212'))
// }
// //