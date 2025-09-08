import{products} from "./database.js"

document.querySelector('.middle-button').addEventListener('click',
  ()=>{
    let product;
    let input=document.querySelector('.input').value.toUpperCase()
    // console.log(input)
    products.forEach((prod)=>{
     
      let name1=prod.name.toUpperCase()
    if(input===name1){
    product= prod
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
    

 document.querySelector('.js-main-grid').innerHTML=html

    }

    })

    // console.log(product)
        
}
)
