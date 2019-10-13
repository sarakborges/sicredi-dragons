import { NgModule } from '@angular/core';

import { CommonAppModule } from '@common/common.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonAppModule, AuthRoutingModule]
})
export class AuthModule {}
