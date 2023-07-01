package com.arteaga.PruebaGlobal.app.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arteaga.PruebaGlobal.app.Dao.IEmpleadosDao;
import com.arteaga.PruebaGlobal.app.models.Empleados;
@Service
public class EmpleadosService implements IService<Empleados>{
	@Autowired
	IEmpleadosDao empleadosDao;

	@Override
	public List<Empleados> listar() {
		// TODO Auto-generated method stub
		return (List<Empleados>)empleadosDao.findAll();	
		}

	@Override
	public Optional<Empleados> getById(Long id) {
		// TODO Auto-generated method stub
		return empleadosDao.findById(id);
	}

	@Override
	public void guardar(Empleados t) {
		// TODO Auto-generated method stub
		empleadosDao.save(t);
		
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		empleadosDao.deleteById(id);
		
	}

}
