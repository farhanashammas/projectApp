import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
const __dirname="https://landcombackend.herokuapp.com/"
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
    return this.http.post(__dirname+"login",user)
  }
  signup(user){
    return this.http.post(__dirname+"signup",user)
  }
  users(){
    return this.http.get(__dirname+"signup/users")
  }
  deleteUser(email){
    return this.http.post(__dirname+"signup/delete",{email:email})
  }
  products(category){ 
    return this.http.post(__dirname+"products",{category:category})
  }
  newProduct(product){
    return this.http.post(__dirname+"products/insert",product)  
  }
  updateProduct(product){
    return this.http.post(__dirname+"products/update",product) 
  }
  delete(id){
    return this.http.post(__dirname+"products/delete",{id:id}) 
  }
  setUser(email){
    this.storage.set('email',email);
  }
  getUser(user){
    return this.http.post(__dirname+"signup/profile",{email:user})
  }
  getAds(user){
    return this.http.post(__dirname+"products/ads",{email:user})
  }
  product(id){
    return this.http.post(__dirname+"products/product",{id:id}) 
  }
  random(){
    return this.http.get(__dirname+"products/random") 
  }
} 


    