import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { TabsModule } from "../containers/default-layout/tabs/tabs.module";



@NgModule({
    declarations: [
        ServicesComponent
    ],
    exports: [
        ServicesComponent,
    ],
    imports: [
        CommonModule,
        TabsModule
    ]
})
export class SharedComponentsModule { }
