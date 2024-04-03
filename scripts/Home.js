import { getsubscription } from "./Subscriber.js";
let isSubscribed = getsubscription();
if(!isSubscribed){
    document.querySelector('.subscribe').innerHTML = 'Subscribe';
   

}
else if(isSubscribed){
    document.querySelector('.subscribe').innerHTML = 'Subscribed';
}

document.querySelector('.subscribe').addEventListener('click',()=>{
    if(isSubscribed){
      
         isSubscribed = false;
         document.querySelector('.subscribe').innerHTML = 'Subscribe';
         localStorage.setItem('subscription',JSON.stringify(isSubscribed));
        
    
    }
    else if(!isSubscribed){
    isSubscribed = true;
    document.querySelector('.subscribe').innerHTML = 'Subscribed';
    localStorage.setItem('subscription',JSON.stringify(isSubscribed));
   }
   console.log(isSubscribed);
});
