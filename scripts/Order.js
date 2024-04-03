import { Cart } from "./Cart.js";
let orderBtn = '';
let ship = true;
let pick = false;


document.querySelector('.ship-option').addEventListener('click',()=>{
   ship = true;
   pick = false;
    document.querySelector('.ship-option').style.border = "black solid 2px";
    document.querySelector('.pickup-option').style.border = "solid rgba(0, 0, 0, 0.114) 1px";
    changeForm();
});

document.querySelector('.pickup-option').addEventListener('click',()=>{
    ship = false;
    pick = true;
     document.querySelector('.ship-option').style.border = "solid rgba(0, 0, 0, 0.114) 1px";
     document.querySelector('.pickup-option').style.border = "black solid 2px";
     changeForm();
 });


function changeForm(){
    if(ship){
    document.querySelector('.form-content').innerHTML = 
    `
    <div class="col-6">
                               
    <input type="text" class="form-control p-3" id="validationCustom01" placeholder="First Name" required>

  </div>
  <div class="col-6">
  
    <input type="text" class="form-control p-3" id="validationCustom02" placeholder="Last name"  required>
    
  </div>
  <div class="col-12">
  
   
      <input type="text" class="form-control p-3" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Write Your Adreess Here" required>
      
    </div>
  

  <div class="col-12">
    <input type="text" class="form-control p-3" id="validationCustom04" placeholder="Email"  required>

  </div>
  <div class="col-12">
   
    <input type="text" class="form-control p-3" id="validationCustom05" placeholder="Phone Number" required>
    
  </div>

  <div class="col-12 text-center mt-4">
    <button class="btn btn-primary order-button" type="submit">Order</button>
  </div>
    `;
    }
    else{
        document.querySelector('.form-content').innerHTML = 
        `
        <div class="col-12 my-4">
                                  
        <select class="form-select p-3" id="validationCustom01" required>
        <option selected disabled>Choose a pick up Store</option>
         <option>Pristina Store</option>
         <option>Berlin Store</option>
         <option>London Store</option>
         </select>
        <div class="invalid-feedback">
         Please select a Store
        </div>
        </div>

        <div class="col-12 text-center mt-4">
        <button class="btn btn-primary order-button" type="submit">Order</button>
      </div>
        `;
    }
}



