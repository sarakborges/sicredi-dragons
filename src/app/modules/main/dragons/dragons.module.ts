import { NgModule } from "@angular/core";

import { CommonAppModule } from "@common/common.module";

import { DragonsRoutingModule } from "./dragons-routing.module";

@NgModule({
  imports: [DragonsRoutingModule, CommonAppModule]
})
export class DragonsModule {}
