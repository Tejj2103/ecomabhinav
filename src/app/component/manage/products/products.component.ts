import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild("myNameElem") myNameElem: ElementRef | undefined;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient,
    private router: Router) {

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      category: [''],
    });
  }

  async openPopup(event: any) {
    console.log("id", event.target.id);
    this.router.navigate(['/editproduct', event.target.id as number]);
  }

  async getProducts() {
    if (this.searchForm.value.category != null && this.searchForm.value.category.length > 0) {
      console.log("getting products by category")
      this.getAllProductsByCategory();
    } else {
      console.log("getting all products")
      this.getAllProducts();
    }
  }

  async getAllProducts() {
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    this._http.get<any>(' https://sfh-product-service.herokuapp.com/products', { headers }).subscribe(data => {
      this.retData = data;
    })


  }

  async sortProd() {
    // sort  dynamic key = price, anytoher, clear filer 
    // this.retData = this.retData.sort();
    // this.rest = wha
  }

  async getAllProductsByCategory() {
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    this._http.get<any>(' https://sfh-product-service.herokuapp.com/products/category?category='.concat(this.searchForm.value.category), { headers }).subscribe(data => {
      this.retData = data;
    })
  }

}
