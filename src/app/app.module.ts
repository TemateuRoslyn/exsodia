import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TabsModule } from './layout/tabs';
import { ScroolComponent } from './layout/scrool/scrool.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScroolComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
