import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';


@NgModule({
    declarations: [
        ShareComponent,
        MainFooterComponent,
    ],
    exports: [
        MainFooterComponent
    ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }
