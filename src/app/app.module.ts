import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiComponent } from './api/api.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BitcoinService } from './bitcoin/bitcoin.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';





@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'api', component: ApiComponent},
      {path: 'bitcoin', component: BitcoinComponent},
      
    ])
  ],
  declarations: [ AppComponent, HelloComponent, ApiComponent, BitcoinComponent, HomeComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, ApiService, ],

})
export class AppModule { }