package com.example.myapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {

    @Autowired
    EmployeeService employeeService;



    @PostMapping("employee")
    public Employee create(@RequestBody Employee employees){
        employeeService.create(employees);
        return employees;
    }

    @GetMapping("employee")
    public List<Employee> Employees(){
        return employeeService.getEmployee();
    }

    @GetMapping("employee/{id}")
    public  Employee FindEmployee(@PathVariable Long id){
       return employeeService.findEmp(id);
    }

    @DeleteMapping("employee/{id}")
    public String deleteEmployee(@PathVariable long id){
        employeeService.deleteEmployee(id);
        return "Employee delete successfully";
    }

    @PutMapping("employee/{id}")
    public String updateEmployee(@PathVariable long id,@RequestBody Employee employee){
        employeeService.updateEmployee(id,employee);
        return "Employee Data successfully update";
    }
}
