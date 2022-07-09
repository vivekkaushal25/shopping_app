
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close =  document.getElementById('navbar');

doSomething = (event) => {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems= JSON.parse(cartItems);
  let arg1=event.target.getAttribute('arg1');
  let arg2=event.target.getAttribute('arg2');
  let arg3=event.target.getAttribute('arg3');
   let cartCost = localStorage.getItem('totalCost');
   cartCost=parseInt(cartCost);
   arg2=parseInt(arg2);
   arg3=parseInt(arg3);
  cartCost=cartCost-(arg2*arg3);
 
   delete cartItems[arg1];
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
  localStorage.setItem("totalCost",cartCost);
  displayCart();
}
decrease = (event) => {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems= JSON.parse(cartItems); 
  let arg1=event.target.getAttribute('arg1');
  let arg2=event.target.getAttribute('arg2');
  let arg3=event.target.getAttribute('arg3');
   let cartCost = localStorage.getItem('totalCost');
   cartCost=parseInt(cartCost);
   arg2=parseInt(arg2);
   arg3=parseInt(arg3);
   if(cartItems[arg1].inCart>0)
   {cartCost-=arg2;
   cartItems[arg1].inCart-=1;}
   if(cartItems[arg1].inCart==0)
  {
    delete cartItems[arg1];
  }

  localStorage.setItem("totalCost",cartCost);
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
  displayCart();
}
increase = (event) => {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems= JSON.parse(cartItems);
  let arg1=event.target.getAttribute('arg1');
  let arg2=event.target.getAttribute('arg2');
  let arg3=event.target.getAttribute('arg3');
   let cartCost = localStorage.getItem('totalCost');
   cartCost=parseInt(cartCost);
   arg2=parseInt(arg2);
   arg3=parseInt(arg3);
  cartCost=cartCost+arg2;
  cartItems[arg1].inCart+=1;
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
  localStorage.setItem("totalCost",cartCost);
  displayCart();
}

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}



// cart page
let prod =[
  {
    src: 'img/product/c1.jpg'
  },
  {
    src: 'img/product/c2.jpg'
  },
  {
    src: 'img/product/c3.jpg'
  },
  {
    src: 'img/product/c4.jpg'
  },
  {
    src: 'img/product/c5.jpg'
  },
  {
    src: 'img/product/c6.jpg'
  },
  {
    src: 'img/product/c7.jpg'
  },
  {
    src: 'img/product/c8.jpg'
  },
  {
    src: 'img/winter/w1.jpg'
  },
  {
    src: 'img/winter/w3.jpg'
  },
  {
    src: 'img/winter/w3.jpg'
  },
  {
    src: 'img/winter/w4.jpg'
  },
  {
    src: 'img/winter/w5.jpg'
  },
  {
    src: 'img/winter/w6.jpg'
  },
  {
    src: 'img/winter/w7.jpg'
  },
  {
    src: 'img/winter/w8.jpg'
  }
  

]

 let tochange=document.querySelectorAll(".pro11");
 let toindx=document.querySelectorAll(".in1");
 

for(let i=0;i<tochange.length;i++)
{  
  tochange[i].addEventListener('click',()=>{
    localStorage.setItem("indx",i);
  })
  
}
for(let i=0;i<toindx.length;i++)
{
toindx[i].addEventListener('click',()=>{
    localStorage.setItem("indx",i);
  })
}
let indx1=localStorage.getItem("indx");
console.log(indx1);
let now=document.getElementById("single-pro-image");

function changedis(product){
 
   if(now!=null)
   {  
    
    now.innerHTML='';
    now.innerHTML=`<img src="${prod[indx1].src}" width="100%" id="MainImg" alt="">
    <div class="small-img-group">
     <div class="small-img-col">
     <img src="img/product/c5.jpg" width="100%" height="100%" class="small-img" alt="">
     </div> 
     <div class="small-img-col">
      <img src="img/product/c2.jpg" width="100%" height="100%" class="small-img" alt="">
     </div> 
     <div class="small-img-col">
      <img src="img/product/c3.jpg" width="100%" height="100%" class="small-img" alt="">
     </div> 
     </div>  `;
   }
}


let products = [
     {
       name: 'Tshirt1',
       tag: 'white1',
       price: 499,
       inCart:0

     },
     {
        name: 'Tshirt2',
        tag: 'white2',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt3',
        tag: 'white3',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt4',
        tag: 'white4',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt5',
        tag: 'white5',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt6',
        tag: 'white6',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt7',
        tag: 'white7',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt8',
        tag: 'white8',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt9',
        tag: 'white9',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt10',
        tag: 'white10',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt11',
        tag: 'white11',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt12',
        tag: 'white12',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt13',
        tag: 'white13',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt14',
        tag: 'white14',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt15',
        tag: 'white15',
        price: 499,
        inCart:0
      },
      {
        name: 'Tshirt16',
        tag: 'white16',
        price: 499,
        inCart:0
      }

]


let carts=document.querySelectorAll('.cart1');

for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function cartNumbers(product){
  
    setItems(product);
}


function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
     cartItems = JSON.parse(cartItems);
     
     if(cartItems!=null)
     {
       if(cartItems[product.name]==undefined)
       { 
        cartItems = {
            ...cartItems,
            [product.name]: product
        }
       }
       cartItems[product.name].inCart+=1;
       if(cartItems[product.name].inCart>1)
         {
          window.alert("increasing the quantity as this item is already added in your cart");
         }
     }
     else
     {
      
       cartItems ={
        [product.name]: product
       }
       cartItems[product.name].inCart+=1;
     }

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
   
}

function totalCost(product) {

  //console.log("the product price is",product.price);

  let cartCost=localStorage.getItem('totalCost');

  if(cartCost!=null)
  { cartCost=parseInt(cartCost);
    
    localStorage.setItem('totalCost',cartCost+product.price);
  }
  else
  { 
    localStorage.setItem('totalCost',product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems= JSON.parse(cartItems);
  //console.log(cartItems);
  let productsContainer=document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
   if(cartItems && productsContainer)
   {
      productsContainer.innerHTML = '';
      Object.values(cartItems).map(item=>{
        productsContainer.innerHTML +=`
        <div class="overall">
        <div class="product">
          <span>${item.name}</span>
           <button class="Remove" arg1="${item.name}" arg2="${item.price}" arg3="${item.inCart}" onClick="doSomething(event); return false;">REMOVE</button>
        </div>
        <div class="product-price">Rs${item.price}.00</div> 
        <div class="product-quantity">
        <button arg1="${item.name}" arg2="${item.price}" arg3="${item.inCart}" onClick="decrease(event); return false;">←</button>
        <span>${item.inCart}</span>
        <button arg1="${item.name}" arg2="${item.price}" arg3="${item.inCart}" onClick="increase(event); return false;">→</button>
        </div>
        <div class="product-total">
         Rs${item.inCart*item.price}.00
        </div>

        </div>
        `
      });
      productsContainer.innerHTML+=`
      <div class="cartTotalContainer">
       <h4 class="cartTotalTitle">
       Cart Total:  
       </h4>
       <h4 class="cartTotal">
         Rs${cartCost}.00
       </h4>
      </div>
      `
   }
}

let Bigadd=document.getElementById("BigAdd");
if(Bigadd){
  Bigadd.addEventListener('click',() => {
    cartNumbers(products[indx1]);
    totalCost(products[indx1]);
  })
}


// let pros=document.querySelectorAll('.pro1');

// // localStorage.setItem('detail_src',"");

// for(let i=0;i<pros.length;i++)
// {
//   pros[i].addEventListener('click',(event)=>{
//       let srcNew=event.target.getAttribute('src1');
//       console.log(typeof srcNew); 
//       displayDetails(srcNew);
//   })
// }
// function displayDetails(srcNew){

//   let isit=document.querySelectorAll(".single-pro-details");
//    localStorage.setItem('detailsSrc',srcNew);
//    srcNew=localStorage.getItem('detailsSrc');
  
//   console.log("bye");
//   let detailsContainer=document.querySelector(".MainImg1");
//   if(srcNew&&isit)
//   { console.log("hello");
    
//    detailsContainer.innerHTML="<h1>Hello</h1>";
   
//   }

// }
changedis();
displayCart();


    // <img src="img/product/c1.jpg" width="100%" id="MainImg" alt="">
    //    <div class="small-img-group">
    //     <div class="small-img-col">
    //     <img src="img/product/c1.jpg" width="100%" height="100%" class="small-img" alt="">
    //     </div> 
    //     <div class="small-img-col">
    //      <img src="img/product/c2.jpg" width="100%" height="100%" class="small-img" alt="">
    //     </div> 
    //     <div class="small-img-col">
    //      <img src="img/product/c3.jpg" width="100%" height="100%" class="small-img" alt="">
    //     </div> 
    //     </div>  