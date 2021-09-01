import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealFinderComponent } from '../deal-finder/deal-finder.component';

const routes: Routes = [
  { path: 'deal-finder', component: DealFinderComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
