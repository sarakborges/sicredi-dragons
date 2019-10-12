import { NgModule } from "@angular/core";

import { CommonAppModule } from "@common/common.module";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  imports: [AuthRoutingModule, CommonAppModule]
})
export class AuthModule {}
