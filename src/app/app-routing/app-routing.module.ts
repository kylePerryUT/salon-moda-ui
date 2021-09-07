import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealDetailComponent } from '../deal-detail/deal-detail.component';
import { DealFinderComponent } from '../deal-finder/deal-finder.component';
import { DealDetailGuard } from '../deal-detail/deal-detail.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'deal-finder', component: DealFinderComponent},
  { path: 'deal-detail/:id',
    canActivate: [ DealDetailGuard ],
    component: DealDetailComponent
  },
  { path: '404', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent}
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
