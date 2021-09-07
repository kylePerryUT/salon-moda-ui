import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../products/product.model';

@Component({
  selector: 'app-deal-finder',
  templateUrl: './deal-finder.component.html',
  styleUrls: ['./deal-finder.component.css']
})

export class DealFinderComponent implements OnInit {
  Products: IProduct[] = [
    {
      id: 1,
      brand: 'Loreal',
      name: 'Metal Detox Shampoo',
      size: '16oz',
      fullPrice: 29.99
    },
    {
      id: 2,
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
