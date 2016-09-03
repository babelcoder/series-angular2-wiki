import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';
import { HomeComponent } from './home';
import { 
  PageService,
  PageListComponent
} from './pages';
import { routing } from './app.routing';

// Barrels are not reaching into sub barrels: https://github.com/angular/angular-cli/issues/585
// import {
//   AppComponent,
//   HeaderComponent,
//   HomeComponent
// } from './'

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    HeaderComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    PageService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
