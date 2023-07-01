import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './List/Empleados/list-empleados/list-empleados.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AltaComponent } from './Alta/alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    FooterComponent,
    NavbarComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
