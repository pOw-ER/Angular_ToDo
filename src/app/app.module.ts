import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // burda bootstrap ilk calistirilacak uygulamam manasina gelior ve biz ilk App componenti calistirmak istiyoruz. Hier bedeuted bootstrap, welche compenent zuerst geladet werden sollte.
})
export class AppModule { }
