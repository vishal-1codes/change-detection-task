import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ],exports:[
    ParentComponent,
    ChildComponent
  ]
})
export class ParentModule { }
