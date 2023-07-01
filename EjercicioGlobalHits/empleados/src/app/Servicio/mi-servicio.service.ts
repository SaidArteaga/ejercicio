import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public listaEmpleados : any [];
  public empleados : any [];
  public salarios : any;

  constructor(private http :  HttpClient, private router: Router){
    this.listaEmpleados = [];
    this.empleados=[];
    this.salarios=0;
  } 

  obtenerlistEmpleados(): void{
    this.http.get("http://localhost:8080/api/empleados").subscribe((respuesta : any) =>{
      this.listaEmpleados = respuesta;
      this.salarios =0;

      this.listaEmpleados.forEach(empleado =>{
        console.log(empleado.salario)
        this.salarios += empleado.salario;
      })
    });
  }

  guardarEmpleado(nombre : String, cargo : String, salario : Number){
   this.http.post("http://localhost:8080/api/empleados", {
    "nombre" : nombre,
    "cargo" : cargo,
    "salario" : salario,
   }).subscribe((respuesta : any) =>{console.log(respuesta.msg)});
  }

  public eliminarEmpleado(id: number){
    const params = new HttpParams().set('id',id.toString());
    console.log(" Funcion eliminar: ", id)
    this.http.delete("http://localhost:8080/api/empleados/eliminar", {params}).subscribe((respuesta : any) => {
      Swal.fire({
        title: "Empleado eliminado",
        confirmButtonText:"OK"
      }).then((result)=>{
        if(result.isConfirmed)(
          this.detalleEmpleado
        )
      })
    })
  }
  detalleEmpleado (id : number): void{
    this.http.get("http://localhost:8080/api/empleados/obtener/"+ id).subscribe((respuesta : any) =>{
      console.log(respuesta);
      this.empleados = respuesta;
    });

  }
  public actualizarEmpleado(id: number,nombre : String, cargo : String, salario : Number): void{
    this.http.put('http://localhost:8080/api/empleados/actualizar/' + id,{
     "id" : id,
     "nombre" : nombre,
     "cargo" : cargo,
     "salario" : salario,
    }).subscribe((resp: any)=>{
     Swal.fire({
       title: "Empleado actualizado", confirmButtonText: "OK"
     }).then((result)=>{
       if (result.isConfirmed){
         this.router.navigate(["/Empleados"])
       }
     })
    })
   } 
}
