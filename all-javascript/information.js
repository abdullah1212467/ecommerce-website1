import { products ,cart} from "./database.js";
// console.log(infoarray)
export let infoarray=[]
//JSON.parse(localStorage.getItem("info"))||


let ideal=0;

   let ali21= JSON.parse(localStorage.getItem("info"))
//    console.log(ali21)
   let mlq;
   let mol
//   let alk1=  JSON.parse(ali21)
let srcal=''
let html10
// console.log(srcal)
ali21.forEach((el)=>{
mlq=el
// console.log("ali")
   products.forEach((element)=>{
   // console.log( element.image)
   if( element.image ===mlq ){
   mol=element
   }
   
   // console.log(mol)

   })
   ideal= mol.id
//    console.log(mol.image)
    html10=`
<div class="div-1 ">
<div class="malana">
                <div class="d1">
<div class="div-2">
      <div class="div-3 js-images121">
        <img class="img-321 " src="${mol.image}">
      </div>
      </div>
      <div class="d2">
      <div class="image-grid">
        <div class="small-img img-l1" data-image1="${mol.image1}">
            <img class="img-322 "  src="${mol.image1}">
        </div>
        <div class="small-img img-l2" data-image2="${mol.image2}">
            <img class="img-322 "  src="${mol.image2}">
        </div>
        <div class="small-img img-l3" data-image3="${mol.image3}">
            <img class="img-322 "  src="${mol.image3}">
        </div>
      </div>
      <div class="name-1">${mol.name}  </div>
      <div class="ratting"> Ratting : (${mol.ratting.numb})</div>
      <div class="price"> Price: ₹ ${mol.price}</div>
      <div><button class="add-to-cart click-to-add" data-id="${mol.id}">Add to cart</button></div>
    </div>
    </div>
     </div>
</div>
`
srcal+=html10

})
// console.log(ideal)
//  console.log(ideal)
 

    
// console.log(html10)
//  document.querySelector('.main-dives')=html10


let amnalia=JSON.parse(localStorage.getItem('amna'))
document.querySelector('.js-cart').innerHTML=amnalia

// console.log( document.querySelector('.main-dives1212'))
document.querySelector('.main-dives1212').innerHTML=srcal
let all1211=document.querySelector('.click-to-add')

document.querySelector('.click-to-add').addEventListener('click',()=>{
  let amna1=JSON.parse(  localStorage.getItem('amna'))
//  console.log("amna2")
 amna1=amna1+1;
 localStorage.setItem('amna', JSON.stringify(amna1))
 let amna2=JSON.parse(  localStorage.getItem('amna'))
//  console.log(amna2)
 document.querySelector('.js-cart').innerHTML=amna2

 let div11 =`<div>Adding</div> `
 let div12 =`<div class="adding-tocheck"> <img class="add1" src="images/icons/checkmark-white.png"></div><div class="add-1-1">Added</div> `
 
//  document.querySelectorAll('.add-js').forEach((all)=>{
//      all.addEventListener('click',()=>{
        
        //  let productid11= all.dataset.ali1
        //  ordersummery.forEach((olo)=>{
        //   let productid1= olo.cartel.productId
        //  //  console.log( productid11)
          
          //  if(productid1===productid11){
             // console.log(productid1)
             all1211.innerHTML=div11
             setTimeout(()=>{
                all1211.innerHTML=div12
             },1000)
             console.log('add')
            // }
          // }
          // )})
          // })

        

 cart.push({
    productId: ideal ,
    quantity: 1,
    way:'1'
})
localStorage.setItem('carts',JSON.stringify(cart))

})
////////////////make 3 images into 1///////////////////

let box=document.querySelector('.img-l1')
box.addEventListener('click',()=>{

       let img1= box.dataset.image1
       // console.log(img1)
       let images111=`<img class="img-321 " src="${img1}">`
    //    console.log(images111)
      document.querySelector('.js-images121').innerHTML=images111
   
        })


    let box1=document.querySelector('.img-l2')
box1.addEventListener('click',()=>{

        let img1= box1.dataset.image2
        // console.log(img1)
        let images111=`<img class="img-321 " src="${img1}">`
        //  console.log(images111)
        document.querySelector('.js-images121').innerHTML=images111
    
        })
        let box2=document.querySelector('.img-l3')
box2.addEventListener('click',()=>{

        let img2= box2.dataset.image3
        // console.log(img2)
        let images111=`<img class="img-321 " src="${img2}">`
        //  console.log(images111)
        document.querySelector('.js-images121').innerHTML=images111
    
        })
        
  ////////////////////////////////////////////////////////   

  


























