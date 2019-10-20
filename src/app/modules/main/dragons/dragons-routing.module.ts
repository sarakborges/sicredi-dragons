import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonsComponent } from './dragons.component';
import { DragonsListComponent } from './list/dragons-list.component';

const routes: Routes = [
  {
    path: '',
    component: DragonsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },

      {
        path: 'list',
        component: DragonsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DragonsRoutingModule {}
