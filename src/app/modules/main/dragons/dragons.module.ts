import { NgModule } from '@angular/core';

import { CommonAppModule } from '@common/common.module';

import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsComponent } from './dragons.component';

@NgModule({
  declarations: [DragonsComponent],
  imports: [CommonAppModule, DragonsRoutingModule]
})
export class DragonsModule {}
