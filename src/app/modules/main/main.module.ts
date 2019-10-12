import { NgModule } from "@angular/core";

import { CommonAppModule } from "@common/common.module";

import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  imports: [MainRoutingModule, CommonAppModule]
})
export class MainModule {}
