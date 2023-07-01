package com.arteaga.PruebaGlobal.app.Controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.arteaga.PruebaGlobal.app.Service.IService;
import com.arteaga.PruebaGlobal.app.models.Empleados;


@RestController
@RequestMapping("api/empleados")
@CrossOrigin(origins = "*")
public class EmpleadosController {
	@Autowired
	IService<Empleados> empleadosService;
	
	@PostMapping
	public Map<String, String> guardar(@RequestBody Empleados e){
		empleadosService.guardar(e);
		Map<String, String> respuesta = new	HashMap<>();
		respuesta.put("msg", "Empleado Guardado Correctamente");
		
		return respuesta;	
	}
	
	@GetMapping
	public List<Empleados> listar(){
		return empleadosService.listar();
	}
	
	@GetMapping("/obtener/{id}")
	public Optional<Empleados> obtenerporId(@PathVariable(name= "id")Long id){
		return empleadosService.getById(id);
	}
	
	@DeleteMapping("eliminar")
	public Map<String, String> eliminar (@RequestParam(name = "id") Long id){
		empleadosService.getById(id);
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("msg", "Empleado eliminado correctamente");
		return respuesta;
	}
	@PutMapping("/actualizar/id")
	public Map<String, String> actualizar(@RequestBody Empleados e, @PathVariable(name = "id")Long id){
		Optional<Empleados> empleado  = empleadosService.getById(id);
		if (empleado.isPresent()) {
			e.setId(id);
			empleadosService.guardar(e);
		}
		else {
			throw new RuntimeException("El Empleado no existe en la bd");
		}
		Map<String, String>respuesta = new HashMap<>();
		respuesta.put("msg", "Empleado actualizado correctamente");
		return respuesta;
	}
	

}
