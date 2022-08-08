import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatsComponent } from './cats/cats.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './dogs/dogs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomepageComponent,
    CatsComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
      }, {
        path:'homepage', component: HomepageComponent
      }, {
        path: 'cats', component: CatsComponent
      }, {
        path: 'dogs', component: DogsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
