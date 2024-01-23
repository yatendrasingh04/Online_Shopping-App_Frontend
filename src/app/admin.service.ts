import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
//we call only apis
export class AdminService {


  constructor(private http: HttpClient) { }
  getProduct() { //calling apis
    const url = "http://localhost:8080/api/product/show";
    return this.http.get(url);

  }
  update(p: Product) {                               
    const url = "http://localhost:8080/api/product/update/" + p.Id;
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, p, { headers });

  }
  delete(id: number) {
    const url = "http://localhost:8080/api/product/delete/" + id;
    return this.http.delete(url);
  }
  create(model: Product) {
    const url = "http://localhost:8080/api/product/create";
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, model, { headers });
  }
  adminsignup(model: login) {
    const url = "http://localhost:8080/api/AdminLogin/signup";
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
    return this.http.post(url, model, { headers, 'responseType': 'text' });
  }
  adminlogin(model: login) {
    const url = "http://localhost:8080/api/AdminLogin/search/" + model.email + "/" + model.password;
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
    return this.http.get(url, { headers, 'responseType': 'text' });
  }
}
