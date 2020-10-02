import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListToDoComponent} from "src/app/list-to-do/list-to-do.component"

const routes: Routes = [
  { path: '', component: ListToDoComponent, pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
