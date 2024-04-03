import { clothes } from "./Clothes.js";
import { CentToEuro } from "./Money.js";
import { getsubscription } from "./Subscriber.js";
import {Cart} from "./Cart.js";
import { generateSocialMedias } from "./SocialMedias.js";



function fillCart(id,size){
clothes.forEach((product)=>{
if(product.id == id){
    Cart.push({product:product, size:size});
    cartItems();
}
});
localStorage.setItem('Cart',JSON.stringify(Cart));
console.log(Cart);
}

export let subcriptionDiscount = '';
if(getsubscription()){
subcriptionDiscount = '<span class="text-success"> -10% Off</span>';
}

export function GenerateHtml(type){
  
    let html = '';
    for(let i = 0; i<clothes.length; i++){
        if(clothes[i].type === type){ 
         html += `
        <div class="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center my-4">
        <div class="card card-animation border-0 shadow" style="width: 90%;">
           <img src="Clothes/${clothes[i].img}" class="card-img-top" alt=${clothes[i].name} style="width: 100%;  height: 400px; object-fit: cover;" data-bs-toggle="modal" data-bs-target="#product${clothes[i].id}">
           <div class="card-body text-center">
           <div class="text-start">
               <h5>${clothes[i].name} - ${clothes[i].color} </h5>
               <p>${CentToEuro(clothes[i].priceCents)}$  ${subcriptionDiscount}</p>
           </div>
             <div class="d-flex align-items-center justify-content-between m-1">
             Size: <div> <input type="radio" name="nike${clothes[i].id}" value="XS">XS</div><div> <input type="radio" name="nike${clothes[i].id}" value="S">S</div><div> <input type="radio" name="nike${clothes[i].id}" checked value="M">M</div><div> <input type="radio" name="nike${clothes[i].id}" value="L">L</div><div> <input type="radio" name="nike${clothes[i].id}" value="XL">XL</div>
           </div>
             <button class="btn btn-outline-dark m-1 mb-0 add-to-cart" data-product-id="${clothes[i].id}" data-bs-toggle="modal" data-bs-target="#cart${clothes[i].id}">Add To Cart</button>      
           </div>
        </div>
        </div>
    

        <div class="modal fade" id="cart${clothes[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
          <h5>New Cart Item</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-start">
          <div class="card border-0 p-2">
          <div class="row g-0">
            <div class="col-6">
              <img src="Clothes/${clothes[i].img}" class="img-fluid rounded-start" alt="${clothes[i].name}">
            </div>
            <div class="col-6">
              <div class="card-body">
                <h5>${clothes[i].name}</h5>
                <div class="lead">
                  Color : ${clothes[i].color}
                </div>
                <div class="lead">
                  Price : ${CentToEuro(clothes[i].priceCents)}$ ${subcriptionDiscount}
                </div>
                <div class="text-success text-center mt-2">
                Item Added Succesfuly
              </div>
                
                
                
              </div>
            </div>
          </div>
        </div>
          </div>
          </div>
   
      </div>
    </div>



        <div class="modal fade" id="product${clothes[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-start">
            <img src="Clothes/${clothes[i].img}" class="border" style="width:100%; object-fit:cover;">
            <div class="my-2 lead">
             ${clothes[i].name} ${clothes[i].color}
             - ${CentToEuro(clothes[i].priceCents)}$ ${subcriptionDiscount}
            </div>
          </div>

        </div>
      </div>
    </div>
  
        `;
     }
      }
 
     
      document.querySelector('.clothesDiv').innerHTML = html;
      generateSocialMedias();
      document.querySelectorAll('.add-to-cart').forEach((button)=>{
      
        button.addEventListener('click',()=>{
          let SizeInputs = document.querySelectorAll(`input[name="nike${button.dataset.productId}"]`);
          let SelectedSize = '';
          SizeInputs.forEach((input)=>{
               if(input.checked){
                SelectedSize = input.value;
               }
          });
          fillCart(button.dataset.productId,SelectedSize);
      });
      });
       } 


export function sortHtml(type){ 

let Rich;
let sortetArr =[];
function Sort(){
  let html = '';
if(Rich === false){
sortetArr = clothes.sort((a,b)=>a.priceCents - b.priceCents);
}
else if(Rich === true){ 
  sortetArr = clothes.sort((a,b)=>a.priceCents - b.priceCents).reverse();
}
else{
  sortetArr = clothes;
}
sortetArr.forEach(product =>{
  if(product.type === type){ 
html += `
<div class="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center my-4">
<div class="card card-animation border-0 shadow" style="width: 90%;">
   <img src="Clothes/${product.img}" class="card-img-top" alt="${product.name}" style="width: 100%;  height: 400px; object-fit: cover;" data-bs-toggle="modal" data-bs-target="#product${product.id}">
   <div class="card-body text-center">
   <div class="text-start">
       <h5>${product.name} - ${product.color}</h5>
       <p>${CentToEuro(product.priceCents)}$  ${subcriptionDiscount}</p>
   </div>
     <div class="d-flex align-items-center justify-content-between m-1">
     Size: <div> <input type="radio" name="nike${product.id}" value="XS">XS</div><div> <input type="radio" name="nike${product.id}" value="S">S</div><div> <input type="radio" name="nike${product.id}" checked value="M">M</div><div> <input type="radio" name="nike${product.id}" value="L">L</div><div> <input type="radio" name="nike${product.id}" value="XL">XL</div>
   </div>
     <button class="btn btn-outline-dark m-1 add-to-cart" data-product-id="${product.id}" data-bs-toggle="modal" data-bs-target="#cart${product.id}">Add To Cart</button>
        
   </div>
</div>
</div> 

<div class="modal fade" id="cart${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
  <div class="modal-header">
  <h5>New Cart Item</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body text-start">
  <div class="card border-0 p-2">
  <div class="row g-0">
    <div class="col-6">
      <img src="Clothes/${product.img}" class="img-fluid rounded-start" alt="${product.name}">
    </div>
    <div class="col-6">
      <div class="card-body">
        <h5>${product.name}</h5>
        <div class="lead">
          Color : ${product.color}
        </div>
        <div class="lead">
          Price : ${CentToEuro(product.priceCents)}$ ${subcriptionDiscount}
        </div>
        <div class="text-success text-center mt-2">
        Item Added Succesfuly
      </div>
        
        
        
      </div>
    </div>
  </div>
</div>
  </div>
  </div>

</div>
</div>



<div class="modal fade" id="product${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 <div class="modal-header">
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
 </div>
 <div class="modal-body text-start">
   <img src="Clothes/${product.img}" class="border" style="width:100%; object-fit:cover;">
   <div class="my-2 lead">
             ${product.name} ${product.color}
             - ${CentToEuro(product.priceCents)}$ ${subcriptionDiscount}
  </div>
 </div>
 
</div>
</div>
</div>
`;
}
});

document.querySelector('.clothesDiv').innerHTML = html;

document.querySelectorAll('.add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        let SizeInputs = document.querySelectorAll(`input[name="nike${button.dataset.productId}"]`);
        let SelectedSize = '';
        SizeInputs.forEach((input)=>{
             if(input.checked){
              SelectedSize = input.value;
             }
        });
        fillCart(button.dataset.productId,SelectedSize);
    });
    
    });
 };


document.querySelector('.HighLow').addEventListener('click',()=>{
  Rich = true; 
  Sort();
});

document.querySelector('.LowHigh').addEventListener('click',()=>{
 Rich = false;
 Sort();
});

}

export function GenerateCartHtml(){
let html = '';
  for(let i = 0;i<Cart.length;i++){
  html += `
  <div class="col-12 my-2">
  <div class="card shadow">
    <div class="row g-0">
      <div class="col-6">
        <img src="Clothes/${Cart[i].product.img}" class="img-fluid rounded-start" alt="${Cart[i].product.name}">
     </div>
      <div class="col-6">
        <div class="card-body">
          <h5>${Cart[i].product.name}</h5>
          <div class="lead">
            Color : ${Cart[i].product.color}
          </div>
          <div class="lead">
            Size : ${Cart[i].size}
          </div>
          <div class="lead">
            Price :${CentToEuro(Cart[i].product.priceCents)}$
          </div>
          
             <button class="btn btn-dark px-4 delete-btn" data-delete-index="${i}"> Delete </button>
          
        </div>
      </div>
    </div>
  </div>
 </div> 
  `;
  }
  document.querySelector('.cart-row').innerHTML = html;
  deleteFromCart();
}

 function deleteFromCart(){
  document.querySelectorAll('.delete-btn').forEach((button)=>{
    button.addEventListener('click',()=>{
       console.log(button.dataset.deleteIndex);
       let deleteIndex = button.dataset.deleteIndex;
       Cart.splice(deleteIndex,1);
       localStorage.setItem('Cart',JSON.stringify(Cart));
       GenerateCartHtml();
       CalculatePrice();
    });
  });
}

export function CalculatePrice(){
  let orderBtn = '';
  let discount = ''; 
  let numberDiscount = 0;
if(getsubscription()){
    discount = '10% Off';
}
else{
    discount = '0.00 $';
}
  let Price = 0;
  let Shiping = 700;
  let tax = 0;
  let TotalPrice = 0;
Cart.forEach((item)=>{
Price = Price + item.product.priceCents;
});

tax = Price * 0.04;
if(Price >= 10000){
  Shiping = 0;
} 
if(getsubscription()){ 
  numberDiscount = Price * 0.1;
TotalPrice = Price + tax + Shiping;
TotalPrice = TotalPrice - numberDiscount;
}
else{
  TotalPrice = Price + tax + Shiping;
}
if(Cart.length > 0){ 
orderBtn = '';
document.querySelector('.price').innerHTML = `${CentToEuro(Price)}$`;
document.querySelector('.shiping').innerHTML = `${CentToEuro(Shiping)}$`;
document.querySelector('.discount').innerHTML = `- ${discount}`;
document.querySelector('.tax').innerHTML = `${CentToEuro(tax)}$`;
document.querySelector('.total-price').innerHTML = `${CentToEuro(TotalPrice)}$`;
}
else{
orderBtn = 'disabled';
document.querySelector('.price').innerHTML = `...`;
document.querySelector('.shiping').innerHTML = `...`;
document.querySelector('.discount').innerHTML = `...`;
document.querySelector('.tax').innerHTML = `...`;
document.querySelector('.total-price').innerHTML = `...`;
}
document.querySelector('.cart-quantity').innerHTML = Cart.length;
document.querySelector('.order-div').innerHTML = 
` <button class="btn btn-primary ${orderBtn}" data-bs-toggle="modal" data-bs-target="#order-form">Order Items</button>`;
}


export function cartItems(){
 document.querySelector('.cart-items').innerHTML = Cart.length;
}

