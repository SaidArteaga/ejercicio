import { Component } from '@angular/core';
import {  ViewChild, ElementRef} from '@angular/core';
import { MiServicioService } from 'src/app/Servicio/mi-servicio.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {
  constructor(private servicio : MiServicioService){

  }

  @ViewChild("nombre") referenciaNombre! : ElementRef;
  @ViewChild("cargo") referenciaCargo! : ElementRef;
  @ViewChild("salario") referenciaSalario! : ElementRef;
  
  guardarEmpleado(){
    const nombre = this.referenciaNombre.nativeElement.value;
    const cargo = this.referenciaCargo.nativeElement.value;
    const salario = this.referenciaSalario.nativeElement.value;
    

    this.servicio.guardarEmpleado(nombre,cargo,salario)
  }

}
