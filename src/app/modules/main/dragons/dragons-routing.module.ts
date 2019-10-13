import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonsComponent } from './dragons.component';

const routes: Routes = [
  {
    path: '',
    component: DragonsComponent,
    children: [
      {
        // path: 'list',
        // component:
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DragonsRoutingModule {}
