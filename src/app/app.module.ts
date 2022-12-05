import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedComponentsModule } from './components/shared-components.module';
import { FooterComponent, NavbarComponent, ScroolComponent, TabsModule } from './containers';

const APP_CONTAINERS = [
  FooterComponent,
  NavbarComponent,
  ScroolComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
