import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {}
