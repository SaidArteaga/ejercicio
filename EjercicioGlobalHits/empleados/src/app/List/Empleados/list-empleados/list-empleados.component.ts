import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/Servicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {
  constructor(private servicio : MiServicioService){
    this.servicio.obtenerlistEmpleados();
  }
  get listaEmpleados(){
    return this.servicio.listaEmpleados;
  }

  get salarios(){
    return this.servicio.salarios;
  }
  
  eliminarEmpleado(id : number){
    this.servicio.eliminarEmpleado(id);
    setTimeout(()=>{
      this.servicio.obtenerlistEmpleados();
      Swal.fire({
        title: '¿Estas Seguro?',
        text: "Ya no habra vuelta atras!!!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Felicidades lo has borrado.',
          'success'
        )
      }
    })
     })
   
  }

}
