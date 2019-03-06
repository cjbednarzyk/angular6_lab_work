import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  fullName=""
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
    {editionCode: 3, editionName: "International", price: "23.99 USD"},
  ]
  selectedEdition = this.editions[0] //Choose US by default
  selectedShipping = ""
  acceptPolicy = false

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    let requestData = {
      customerName: this.fullName,
      productCode: this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.selectedShipping
    }

    alert(JSON.stringify(requestData))
  }

}
