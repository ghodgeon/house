import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipModule as BsTooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    BsTooltipModule.forRoot()
  ],
  exports: [TooltipComponent],
  entryComponents: [TooltipComponent]
})
export class TooltipModule { }
