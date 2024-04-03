import { clothes } from "./Clothes.js";
import { CentToEuro } from "./Money.js";
import { getsubscription } from "./Subscriber.js";
import { cartItems } from "./GenerateHtml.js";
export let Cart = JSON.parse(localStorage.getItem('Cart'));
    if(!Cart){
    Cart = [];
}

