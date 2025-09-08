import { cart,products,localstore ,options, ordersummery} from "./database.js";


let helperarray=[]
function allproject(){
 let ali111  ; 
let allprod;
let src1=''
cart.forEach((element ,i2) => {
    let dates2;
    let cartday=element.way;
    let iddd= element.productId
    products.forEach((podelement)=>{
        let iddentity=podelement.id
  if(podelement.id===iddd){
    allprod=podelement
}
    })
    options.forEach((optiol)=>{
if(optiol.way===cartday){
dates2=optiol.dayes
}
    })
   let ali =dayjs().add(dates2 ,'days')
        ali111=ali.format('dddd MMMM D')
    let html1=`
    <div class=" maini-div">
        <div class=" maini-div1">
            <div class="heade">
                Delivery date: <div class="heade-1">${ali111}</div>
            </div>
            
            <div class="div">
                <div class="div-1">
                    <img class="img-3" src="${allprod.image}">
                </div>
                <div class="div-2">
                    <div class="div-4" >${allprod.name}</div>
                    <div class="div-5">₹ ${allprod.price}</div>
                    <div class="div-6">
                        <div>
                            <button class="button-1-1 js-1" data-al1="${allprod.id}">-</button>
                            <button class="button-2-2 js-3"  data-al3="${allprod.id}" >${element.quantity}</button>
                            <button class="button-1-1-1 js-2" data-al2="${allprod.id}" data-index="${i2}">+</button>
                        </div>
                        <button class="button-del js-4" data-al4="${allprod.id}" data-atr="${element.quantity}">Delete</button></div>
                    </div>
                    <div class="Delete">
                       
                </div>
                <div class="div-7">
                    <div class="div-4">Choose a delivery option:</div>
                ${rute(iddd ,element)}
                </div>
            </div>
        </div>
    </div>`
    src1+=html1
});

// document.querySelectorAll('.js-3').forEach((elem)=>{
//     let produc= elem.dataset.al3
//     cart.forEach((c1)=>{
   
//   localstore()
//   allproject()
//     }) 
// })


document.querySelector('.js-div').innerHTML=src1
document.querySelectorAll('.js-1').forEach((prod,a2)=>{
prod.addEventListener('click',()=>{
  let produc= prod.dataset.al1
  cart.forEach((c1,a1)=>{
 if(c1.productId === produc && a1===a2){
    if(c1.quantity!=1){
   c1.quantity-=1;
   let amnalia=JSON.parse(localStorage.getItem('amna'))
   amnalia=amnalia-1
   localStorage.setItem('amna', JSON.stringify(amnalia))
//    console.log(amnalia)
    }
    
 }
 if(c1.productId === produc){
    if(c1.quantity===0){
        c1.quantity=1;
        
    }
}
localstore()
allproject()
  })
})
})
document.querySelectorAll('.js-2').forEach((prod,i1)=>{
    prod.addEventListener('click',()=>{
        
        // console.log(i1)
      let produc= prod.dataset.al2
      cart.forEach((c1,i2)=>{
     if(c1.productId === produc && i1===i2){
      c1.quantity+=1;
       let amnalia=JSON.parse(localStorage.getItem('amna'))
   amnalia=amnalia+1
   localStorage.setItem('amna', JSON.stringify(amnalia))
//    console.log(amnalia)
 //  localStorage.setItem('amna', JSON.stringify(amna1))
     }
    localstore()
    allproject()
      })
    })
    })



    /////////////deleatethe button///////////////////////
    document.querySelectorAll('.js-4').forEach((prod,a1)=>{
        prod.addEventListener('click',()=>{
          let dele=prod.dataset.atr
        //   console.log(dele)
          let produc= prod.dataset.al4
          cart.forEach((c1 ,index1)=>{
         if(c1.productId === produc && a1=== index1){
          cart.splice(index1,1)
         let alamna=JSON.parse( localStorage.getItem('amna'))
          alamna=alamna-dele
          localStorage.setItem("amna",JSON.stringify(alamna))
        //   let alamna1=JSON.parse( localStorage.getItem('amna'))
        // console.log(alamna1)
        }
         
        localstore()
        allproject()
          })
        })
        })



     
        let day3 = dayjs().add(0 ,'days')
        let day4=day3.format('dddd MMMM D')


        function rute(iddd ,element){
            let src1=''
        options.forEach((opt)=>{
            let way1;
            let day = dayjs().add(opt.dayes ,'days')
            let day1=day.format('dddd MMMM D')
            if(opt.way==='1'){
             way1="FREE"
            }else{
                way1=opt.shipping
            }
            let rootl=`<div class="chose-grid">
            <div class="radio">
                <input  type="radio"
                 ${(opt.way===element.way ?'checked':'')}
 name ="${iddd}" data-productid="${iddd}"
  data-optionid="${opt.way}" class="input-1 js-radio">
            </div>
            <div>
                <div class="div-8">${day1}</div>
                <div class="div-9"> ₹${way1} Shipping</div>
            </div>
        </div>`
        src1+=rootl
        
        })
          return src1 
        }
        
       
        
        
        document.querySelectorAll(".js-radio").forEach((dol)=>{
            dol.addEventListener('click',()=>{
                let prodductid=dol.dataset.productid
                 let optionid1=dol.dataset.optionid
                //  console.log(prodductid )
                //  console.log( optionid1)
                 let allitems;
                 cart.forEach((elemn)=>{
                   if(elemn.productId===prodductid){
                    allitems=elemn
                   }
                 })
                 allitems.way=optionid1
    // console.log(allitems)
    localstore()
    allproject()
            })
            
         })    
        
        
        
//dataset.productid="${iddd}" data-optionid="${element.way}" 
        
      let totalitem=0;
      let totalshipping=0;
      let totalbeforetex=0;
      let aftertex=0;
     let  totalprice=0; 
     let totalquantity=0; 
   cart.forEach((cartely)=>{

    products.forEach((publi)=>{
        if(publi.id===cartely.productId){
            totalitem+=cartely.quantity*publi.price
        }

    })
    options.forEach((optional)=>{
        if(optional.way===cartely.way){
            totalshipping+=optional.shipping
        }
    })
totalbeforetex=totalitem+totalshipping
aftertex=totalbeforetex*10/100
totalprice=totalbeforetex+aftertex
totalquantity+=cartely.quantity

   
   })     
//    console.log(totalitem) 
//    console.log(totalshipping)  
//    console.log(totalbeforetex)
//    console.log(aftertex)
//    console.log(totalprice)
//    console.log(totalquantity)
  
   let html4=`
   <div class="order-div-1">
               
   <div id="#topl" class="order-div-2">Payment Summary</div>
                <div class="order-div-3">
                    <div class="order-div-3-1">Items (${totalquantity}):</div>
                    <div class="order-div-3-2">₹ ${totalitem}</div>
                </div>
                <div class="order-div-3">
                     <div class="order-div-3-1">Shipping & handling:</div>
                    <div class="order-div-3-2">₹ ${totalshipping}</div>
                </div>
                <div class="order-div-4"></div>
                <div class="order-div-3">
                     <div class="order-div-3-1">Total before tax:</div>
                    <div class="order-div-3-2">₹ ${totalbeforetex}</div>
                </div>
                <div class="order-div-3">
                     <div class="order-div-3-1">Estimated tax (10%):</div>
                    <div class="order-div-3-2">₹ ${Math.round(aftertex)}</div>
                </div>
                <div class="order-div-4"></div>
                 <div class="order-div-5">
                     <div class="order-div-5-1">Order total:</div>
                    <div class="order-div-5-2">₹ ${Math.round(totalprice)}</div>
                </div>
                <div>
               <a href="order.html"> 
                    <button class="order-button js-orderbutton">Place your order</button>
                </a>
                    </div>
            </div>
   `
  
document.querySelector('.js-order').innerHTML=html4
document.querySelector('.out').innerHTML=`${totalquantity} Items`


document.querySelector('.js-orderbutton').addEventListener('click',()=>{
cart.forEach((cartel)=>{
    localStorage.setItem("amna",JSON.stringify(0))
   
    
ordersummery.push({cartel,day4,totalprice})
localStorage.removeItem("carts")
//  al11111='10'
})

// console.log(ordersummery)

localStorage.setItem('orders',JSON.stringify(ordersummery))
// console.log(ordersummery)
})

}

allproject()

