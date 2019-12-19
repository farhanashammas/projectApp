import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
const __dirname="C:\Users\WORK\Desktop\ProjectFinal\projectApp"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  setId(id){
    this.storage.set('id',id);
  }
  getId(){
    return this.storage.get('id');
  }
  login(user){
    return this.http.post("http://localhost:8080/login",user)
  }
  signup(user){
    return this.http.post("http://localhost:8080/signup",user)
  }
  users(){
    return this.http.get("http://localhost:8080/signup/users")
  }
  deleteUser(email){
    return this.http.post("http://localhost:8080/signup/delete",{email:email})
  }
  products(category){ 
    return this.http.post("http://localhost:8080/products",{category:category})
  }
  newProduct(product){
    return this.http.post("http://localhost:8080/products/insert",product)  
  }
  updateProduct(product){
    return this.http.post("http://localhost:8080/products/update",product) 
  }
  delete(id){
    return this.http.post("http://localhost:8080/products/delete",{id:id}) 
  }
  setUser(email){
    this.storage.set('email',email);
  }
  getUser(user){
    return this.http.post("http://localhost:8080/signup/profile",{email:user})
  }
  getAds(user){
    return this.http.post("http://localhost:8080/products/ads",{email:user})
  }
  product(id){
    return this.http.post("http://localhost:8080/products/product",{id:id}) 
  }
  random(){
    return this.http.get("/products/random") 
  }
} 


    