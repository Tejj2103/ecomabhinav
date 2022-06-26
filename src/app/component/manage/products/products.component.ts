import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ManageProductsComponent implements OnInit {

  searchForm!: FormGroup;
  retData: any;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      category: [''],
    });
  }

  async getProducts(){
    if(this.searchForm.value.category != null && this.searchForm.value.category.length > 0){
      console.log("getting products by category")
      this.getAllProductsByCategory();
    }else{
      console.log("getting all products")
      this.getAllProducts();
    }
  }

  async getAllProducts(){
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      this._http.get<any>(' https://sfh-product-service.herokuapp.com/products', {headers}).subscribe(data => {
        this.retData = data;
  })
}

  async getAllProductsByCategory(){
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      this._http.get<any>(' https://sfh-product-service.herokuapp.com/products/category?category='.concat(this.searchForm.value.category), {headers}).subscribe(data => {
        this.retData = data;
    })
  }

}
