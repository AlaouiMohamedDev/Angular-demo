import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public products : any;
  public keyword : string ="";

  constructor() {

  }
  ngOnInit(): void {
    this.products = [
      { "id": 1, "name": "Computer", "price": 4999 },
      { "id": 2, "name": "Printer", "price": 5678 },
      { "id": 3, "name": "SmartPhone", "price": 50999 },
      { "id": 4, "name": "Mouse", "price": 30 }
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }

  search() {
    this.products = this.products.filter((p:any)=>p.name.includes(this.keyword));    
  }
}