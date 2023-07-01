package com.arteaga.PruebaGlobal.app.Dao;

import org.springframework.data.repository.CrudRepository;

import com.arteaga.PruebaGlobal.app.models.Empleados;

public interface IEmpleadosDao extends CrudRepository<Empleados, Long> {

}
