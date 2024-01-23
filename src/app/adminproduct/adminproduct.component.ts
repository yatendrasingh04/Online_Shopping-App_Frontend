import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Product } from '../Product';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {
  constructor(private httpService: AdminService, private router: Router) { }
  posts: any;
  model: any;
  //model2:any;

  ngOnInit() {   //called by default as our page gets loaded
    this.httpService.getProduct().subscribe(
      (response) => { this.posts = response },
      (error) => { console.log(error) }
    );
  }

  update(id: number, name: string, stk: number, price: number) {
    this.model = new Product(id, name, stk, price);
    this.httpService.update(this.model).subscribe(
      (response) => { this.posts = response }
    );
    window.location.reload()

  }

  delete(id: number) {
    this.httpService.delete(id).subscribe(
      (response) => { this.posts = response }
    );
    window.location.reload()

  }

  model2 = new Product(1, "new item", 1000 , 2000);
  create(model2: Product) {

    this.httpService.create(this.model2).subscribe(
      (response) => { console.log(response) }
    );
    window.location.reload()

  }
}
