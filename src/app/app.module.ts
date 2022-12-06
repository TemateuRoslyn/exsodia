import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedComponentsModule } from './components/shared-components.module';
import { DefaultLayoutComponent, FooterComponent, NavbarComponent, ScroolComponent, TabsModule } from './containers';
import { AppRoutingModule } from './app-routing.module';

const APP_CONTAINERS = [
  FooterComponent,
  NavbarComponent,
  ScroolComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabsModule,
    AppRoutingModule,
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
