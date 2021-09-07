import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salon Moda';

  constructor(private router: Router){}

  toHome(): void {
    this.router.navigate(['/home'])
  }

  toDealFinder(): void {
    this.router.navigate(['/deal-finder'])
  }

  toProducts(): void {
    this.router.navigate(['/products']);
  }
}
