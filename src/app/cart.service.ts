import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items = [];

    constructor(
        private httpClient: HttpClient
    ){

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

    getShippingPrices(){
        return this.httpClient.get('/assets/shipping.json')
    }
}