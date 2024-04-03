import { clothes } from "./Clothes.js";
import {CentToEuro} from "./Money.js";
import { getsubscription } from "./Subscriber.js";
import { GenerateHtml,subcriptionDiscount,sortHtml,cartItems } from "./GenerateHtml.js";
import { Cart } from "./Cart.js";

let html = '';
GenerateHtml('men');
sortHtml('men');
cartItems();