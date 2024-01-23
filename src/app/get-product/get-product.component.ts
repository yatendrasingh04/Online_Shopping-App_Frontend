import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent {
  constructor(private httpService: HttpServiceService, private router: Router) { }
  posts: any;

  cart1: Cart[] = new Array();
  ngOnInit() {
    this.httpService.getProduct().subscribe(
      (response) => { this.posts = response },
      (error) => { console.log(error) }
    );
  }
  qty: any;
  total: number = 0;

  onaddToCart(id: number, name: string, price: number) {
    this.total = 0;
    //this.name=this.posts.name;
    this.cart1.push(new Cart(name, price, id, this.qty, price * this.qty));
    for (let i of this.cart1) {
      console.log(this.total);
      this.total += i.total;

    }
  }
  cust = new customer("yatendra singh", 9956254870, this.cart1);
  m: any;

  PlaceOrder() {
    this.httpService.PlaceOrder(this.cust).subscribe(
      (response: string) => {
        this.m = response;
        if (this.m.indexOf('your order has been placed successfully') != -1)
          this.router.navigate(['/successful'])
        else
          document.write(this.m);
      },
      (error) => { console.log(error) },
    );
  }


}
