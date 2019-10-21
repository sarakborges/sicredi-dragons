import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonsComponent } from './dragons.component';
import { DragonsListComponent } from './list/dragons-list.component';
import { DragonsFormComponent } from './form/dragons-form.component';

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
      },

      {
        path: 'edit/:id',
        component: DragonsFormComponent
      },

      {
        path: 'create',
        component: DragonsFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DragonsRoutingModule {}
