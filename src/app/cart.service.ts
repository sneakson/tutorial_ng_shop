import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items = [];

    constructor(){

    }

    addToCart(product){
        this.items.push(product);
    }

    getItems(){
        return this.items;
    }

    getTotal(){
        let total = 0;
        this.items.forEach(item => total += item.price);
        return total;
    }

    clearCart(){
        this.items = [];
        return this.items;
    }
}