import { NgModule } from '@angular/core';

import { CommonAppModule } from '@common/common.module';

import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsComponent } from './dragons.component';
import { DragonsListComponent } from './list/dragons-list.component';
import { DragonsFormComponent } from './form/dragons-form.component';

@NgModule({
  declarations: [DragonsComponent, DragonsListComponent, DragonsFormComponent],
  imports: [CommonAppModule, DragonsRoutingModule]
})
export class DragonsModule {}
