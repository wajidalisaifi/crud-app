package com.example.myapp;

import com.fasterxml.jackson.databind.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService implements empservice {

    @Autowired
    EmployeeRepository repository;


    @Override
    public Employee create(Employee employee) {
        EmpEntity empEntity = new EmpEntity();
        BeanUtils.copyProperties(employee, empEntity);
        repository.save(empEntity);
        return employee;
    }

    @Override
    public List<Employee> getEmployee() {
        List<EmpEntity> newEntity = repository.findAll();
        List<Employee> emp = new ArrayList<>();

        for (EmpEntity entity : newEntity){
            Employee newEmp = new Employee();

            newEmp.setId(entity.getId());
            newEmp.setName(entity.getName());
            newEmp.setEmail(entity.getEmail());
            newEmp.setPhone(entity.getPhone());
            newEmp.setAddress(entity.getAddress());

            emp.add(newEmp);
        }
        return emp;
    }

    @Override
    public String deleteEmployee(long id) {
        EmpEntity emp =  repository.findById(id).get();
        repository.delete(emp);
        return "employee delete";
    }

    @Override
    public Employee updateEmployee(long id, Employee employee) {
        EmpEntity emp = repository.findById(id).get();

        emp.setId(employee.getId());
        emp.setName(employee.getName());
        emp.setEmail(employee.getEmail());
        emp.setPhone(employee.getPhone());
        emp.setAddress(employee.getAddress());

        repository.save(emp);
        return null;
    }

    public Employee findEmp(Long id) {
        EmpEntity empEntity = repository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(empEntity,employee);
        return employee;
    }


}
