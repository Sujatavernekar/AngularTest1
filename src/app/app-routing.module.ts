import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  {path:"add", component:AddComponent},
  {path:"list", component:ListComponent},
  {path:"remove", component:RemoveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
