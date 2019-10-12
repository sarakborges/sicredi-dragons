import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dragons",
        loadChildren: "./dragons/dragons.module#DragonsModule"
      }
    ]
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes)]
})
export class MainRoutingModule {}
