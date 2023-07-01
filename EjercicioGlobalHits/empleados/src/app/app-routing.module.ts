import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './List/Empleados/list-empleados/list-empleados.component';
import { AltaComponent } from './Alta/alta/alta.component';


const routes: Routes = [
  { path : "Empleados", component: ListEmpleadosComponent},
  {path : "Empleados/alta", component: AltaComponent},


  { path : "", redirectTo: "/Empleados", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
