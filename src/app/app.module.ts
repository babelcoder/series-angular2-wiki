import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent } from './shared';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
