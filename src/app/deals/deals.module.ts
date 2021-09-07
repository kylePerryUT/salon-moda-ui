import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealFinderComponent } from './deal-finder/deal-finder.component';
import { DealDetailGuard } from './deal-detail/deal-detail.guard';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: 'deal-finder', component: DealFinderComponent},
  { path: 'deal-detail/:id',
    canActivate: [ DealDetailGuard ],
    component: DealDetailComponent
  },
]

@NgModule({
  declarations: [
    DealDetailComponent,
    DealFinderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class DealFinderModule { }
