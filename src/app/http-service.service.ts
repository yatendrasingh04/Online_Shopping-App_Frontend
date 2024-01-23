import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from './Customer';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  getProduct() {
    const url = "http://localhost:8080/api/product/show";
    return this.http.get(url);

  }

  PlaceOrder(cust: customer) {
    const url = "http://localhost:8080/api/product/orderproduct"
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
    //var respose=new HttpResponse({'Response-Type': 'text'});
    return this.http.post(url, cust, { headers, 'responseType': 'text' });
    //this.http.get.toString();
  }

  userlogin(model: login) {
    const url = "http://localhost:8080/api/userLogin/search/" + model.email + "/" + model.password;
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
    return this.http.get(url, { headers, 'responseType': 'text' });
  }
  usersignup(model: login) {
    const url = "http://localhost:8080/api/userLogin/signup";
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
    return this.http.post(url, model, { headers, 'responseType': 'text' });

  }
}
