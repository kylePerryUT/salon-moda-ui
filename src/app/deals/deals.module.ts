import { NgModule } from '@angular/core';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealFinderComponent } from './deal-finder/deal-finder.component';
import { DealDetailGuard } from './deal-detail/deal-detail.guard';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';

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
    RouterModule.forChild(routes),
    MatTableModule,
    SharedModule
  ]
})
export class DealFinderModule { }
