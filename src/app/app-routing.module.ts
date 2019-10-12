import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AuthGuard } from "@helpers/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "auth",
        loadChildren: "./modules/auth/auth.module#AuthModule"
      },

      {
        path: "main",
        canActivate: [AuthGuard],
        loadChildren: "./modules/main/main.module#MainModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
