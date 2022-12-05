import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScroolComponent } from './scrool/scrool.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScroolComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScroolComponent,
    ServicesComponent,
  ]
})
export class SharedComponentsModule { }
