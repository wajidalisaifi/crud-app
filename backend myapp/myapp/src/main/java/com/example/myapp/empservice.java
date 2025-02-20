package com.example.myapp;


import java.util.List;

public interface empservice {
    public Employee create(Employee employee);
    public List<Employee> getEmployee();
    public String deleteEmployee(long id);
    public Employee updateEmployee(long id, Employee employee);
}
