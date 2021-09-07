import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/models/product.model';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})

export class DealDetailComponent implements OnInit {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.product = {
      id: 1,
      brand: 'Loreal',
      name: 'Metal Detox Shampoo',
      size: '16oz',
      fullPrice: 29.99
    };
  }

  goBack(): void {
    this.router.navigate(['/deal-finder']);
  }

}
