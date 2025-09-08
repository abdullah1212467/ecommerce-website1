 export let cart =JSON.parse(localStorage.getItem('carts'))
 ||[
   // {
   //    productId:'1',
   //        quantity:1,
   //         way:'1'
   // }
    // {
    //     productId:'1',
    //     quantity:1
    // },
    // {
    //     productId:'2',
    //     quantity:1
    // }
 ] 


 export let quality=0
 export let tracpackage=JSON.parse(localStorage.getItem('traking'))||[]
 export function quantityall(){
   
localStorage.setItem("amna",JSON.stringify())
 }

export let ordersummery=JSON.parse(localStorage.getItem('orders'))||[]

 export let options=[
   {
      way:'1',
      dayes:7,
      shipping:0

   },
   {
      way:'2',
      dayes:3,
      shipping:499

   },
   {
      way:'3',
      dayes:1,
      shipping:999

   }
 ]

 export function localstore(){
    localStorage.setItem('carts',JSON.stringify(cart))
 }
 localstore()
 export let products=[
    {
        id:'1',
        image:"images/products/2-slot-toaster-white.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"2-slot-toaster-white",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 2000,
    },
    {
        id:'2',
        image:"images/products/3-piece-cooking-set.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"3-piece-cooking-set",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 3999,
    },
    {
        id:'3',
        image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"adults-plain-cotton-tshirt-2-pack-teal",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 2599,
    },
    {
        id:'4',
        image:"images/products/artistic-bowl-set-6-piece.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"artistic-bowl-set-6-piece",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 3899,
    },
    {
        id:'5',
        image:"images/products/athletic-cotton-socks-6-pairs.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"athletic-cotton-socks-6-pairs",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 1999,
    },
    {
        id:'6',
        image:"images/products/athletic-skateboard-shoes-gray.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"athletic-skateboard-shoes-gray",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 2599,
    },
    {
        id:'7',
        image:"images/products/bath-towel-set-gray-rosewood.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"bath-towel-set-gray-rosewood",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 3000,
    },
    {
        id:'8',
        image:"images/products/bathroom-mat.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"bathroom-mat",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 2999,
    },
    {
        id:'9',
        image:"images/products/black-and-silver-espresso-maker.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"black-and-silver-espresso-maker",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 3000,
    },
    {
        id:'10',
        image:"images/products/blackout-curtain-set-beige.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"blackout-curtain-set-beige",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 1000,
    },
    {
        id:'11',
        image:"images/products/blackout-curtains-set-teal.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"blackout-curtains-set-teal",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 2999,
    },
    {
        id:'12',
        image:"images/products/countertop-push-blender-black.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"countertop-push-blender-black",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 2555,
    },
    {
        id:'13',
        image:"images/products/crystal-zirconia-stud-earrings-pink.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"crystal-zirconia-stud-earrings-pink",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 2999,
    },
    {
        id:'14',
        image:"images/products/crystal-zirconia-stud-earrings-pink.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"crystal-zirconia-stud-earrings-pink",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 1000,
    },
    {
        id:'15',
        image:"images/products/electric-steel-hot-water-kettle-white.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"electric-steel-hot-water-kettle-white",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 5999,
    },
    {
        id:'16',
        image:"images/products/elegant-white-dinner-plate-set.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"elegant-white-dinner-plate-set",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 6999,
    },
    {
        id:'17',
        image:"images/products/facial-tissue-2-ply-8-boxes.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"facial-tissue-2-ply-8-boxes",
        ratting:{
           stars:"images/ratings/rating-30.png",
           numb:"3.0"
        },
        price: 2999,
    },
    {
        id:'18',
        image:"images/products/glass-screw-lid-food-containers.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"glass-screw-lid-food-containers",
        ratting:{
           stars:"images/ratings/rating-20.png",
           numb:"2.0"
        },
        price: 2999,
    },
    {
        id:'19',
        image:"images/products/intermediate-composite-basketball.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"intermediate-composite-basketball",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 2000,
    },
    {
        id:'20',
        image:"images/products/kitchen-paper-towels-8-pack.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"kitchen-paper-towels-8-pack",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 1500,
    },
    {
        id:'21',
        image:"images/products/knit-athletic-sneakers-gray.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"knit-athletic-sneakers-gray",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 3000,
    },
    {
        id:'22',
        image:"images/products/laundry-detergent-tabs.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"laundry-detergent-tabs",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 1599,
    },
    {
        id:'23',
        image:"images/products/luxury-towel-set.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"luxury-towel-set",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 5000,
    },
    {
        id:'24',
        image:"images/products/men-athletic-shoes-white.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-athletic-shoes-white",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 2999,
    },
    {
        id:'25',
        image:"images/products/men-brown-flat-sneakers.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-brown-flat-sneakers",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 4000,
    },
    {
        id:'26',
        image:"images/products/men-chino-pants-beige.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-chino-pants-beige",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 5999,
    },

    {
        id:'27',
        image:"images/products/men-cozy-fleece-hoodie-light-teal.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-cozy-fleece-hoodie-light-teal",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 900,
    },
    {
        id:'28',
        image:"images/products/men-golf-polo-t-shirt-gray.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-golf-polo-t-shirt-gray",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 5000,
    },
    {
        id:'29',
        image:"images/products/men-navigator-sunglasses-black.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-navigator-sunglasses-black",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 4999,
    },
    {
        id:'30',
        image:"images/products/men-stretch-wool-sweater-black.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"men-stretch-wool-sweater-black",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 1000,
    },
    {
        id:'31',
        image:"images/products/non-stick-cooking-set-4-pieces.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"non-stick-cooking-set-4-pieces",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 1999,
    },
    {
        id:'32',
        image:"images/products/round-sunglasses-gold.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"round-sunglasses-gold",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 1999,
    },
    {
        id:'33',
        image:"images/products/sky-leaf-branch-earrings.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"sky-leaf-branch-earrings",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 3999,
    },
    {
        id:'34',
        image:"images/products/straw-sunhat.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"straw-sunhat",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 1000,
    },
    {
        id:'35',
        image:"images/products/vanity-mirror-pink.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"vanity-mirror-pink",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 800,
    },
    {
        id:'36',
        image:"images/products/women-knit-ballet-flat-white.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-knit-ballet-flat-white",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 2000,
    },
    {
        id:'37',
        image:"images/products/women-knit-beanie-pom-pom-blue.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-knit-beanie-pom-pom-blue",
        ratting:{
           stars:"images/ratings/rating-40.png",
           numb:"4.0"
        },
        price: 3000,
    },
    {
        id:'38',
        image:"images/products/women-plain-cotton-oversized-sweater-gray.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-plain-cotton-oversized-sweater-gray",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:'5.0'
                },
        price: 2950,
    },
    {
        id:'39',
        image:"images/products/women-relaxed-lounge-pants-pink.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-relaxed-lounge-pants-pink",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 4000,
    },
    {
        id:'40',
        image:"images/products/women-sandal-heels-white-pink.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-sandal-heels-white-pink",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 3000,
    },
    {
        id:'41',
        image:"images/products/women-striped-beach-dress.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-striped-beach-dress",
        ratting:{
           stars:"images/ratings/rating-45.png",
           numb:"4.5"
        },
        price: 3000,
    },
    {
        id:'42',
        image:"images/products/women-summer-jean-shorts.jpg",
        image1:"images/products/women-summer-jean-shorts.jpg",
        image2:"images/products/women-striped-beach-dress.jpg",
        image3:"images/products/women-sandal-heels-white-pink.jpg",
        name:"women-summer-jean-shorts",
        ratting:{
           stars:"images/ratings/rating-50.png",
           numb:"5.0"
        },
        price: 5000,
    }
]


