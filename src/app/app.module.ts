import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DealFinderComponent } from './deal-finder/deal-finder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealFinderModule } from './deal-finder/deal-finder.module'; 

@NgModule({
  declarations: [
    AppComponent,
    DealFinderComponent,
    DealDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    DealFinderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
