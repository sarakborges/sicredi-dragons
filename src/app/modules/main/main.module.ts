import { NgModule } from '@angular/core';

import { CommonAppModule } from '@common/common.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonAppModule, MainRoutingModule]
})
export class MainModule {}
