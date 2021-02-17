import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCardComponent } from './component/create-card/create-card.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { CardDisplayPageComponent } from './component/card-display-page/card-display-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    CardDisplayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({creditCard:reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
