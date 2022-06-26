import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  searchForm!: FormGroup;
  retData: any;
  prodId: number | null;


  constructor(private formBuilder: FormBuilder, private _http: HttpClient,
    private router: Router, private route: ActivatedRoute) {
    this.prodId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      category: [''],
    });
    this.getProduct();
  }

  async getProduct() {
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    this._http.get<any>(`https://sfh-product-service.herokuapp.com/product?id=${this.prodId}`, { headers }).subscribe(data => {
      this.retData = data[0];
      console.log("data", data);
    })
  }
}
