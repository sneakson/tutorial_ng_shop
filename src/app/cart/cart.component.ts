import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    items;
    total;
    checkoutForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
      this.items = this.cartService.getItems();
      this.total = this.cartService.getTotal();
      this.checkoutForm = this.formBuilder.group({
          name: '',
          address: ''
      })
  }

    onSubmit() {
        window.alert(`Thank you ${this.checkoutForm.value.name} order has been submitted!`);
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
  }

}
