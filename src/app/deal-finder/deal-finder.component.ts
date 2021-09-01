import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-deal-finder',
  templateUrl: './deal-finder.component.html',
  styleUrls: ['./deal-finder.component.css']
})

export class DealFinderComponent implements OnInit {
  Products: Product[] = [
    {
      brand: 'Loreal',
      name: 'Metal Detox Shampoo',
      size: '16oz',
      fullPrice: 29.99
    },
    {
      brand: 'Loreal',
      name: 'Metal Detox Masque',
      size: '16oz',
      fullPrice: 32.99
    }
  ]

  columnsToDisplay = ['brand', 'name', 'size', 'fullPrice'];

  constructor() { }

  ngOnInit(): void {
  }

}
