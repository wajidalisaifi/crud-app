import axios from "axios";


let url = "http://localhost:8080/employee"
class EmployeeService{

    saveEmployee(Employee){
       return axios.post(url,Employee)
    }

    getEmployee(){
        return axios.get(url)
    }
    
    employeeDelete(id){
        return axios.delete(url+"/"+id)
    }

    getEmployeeById(id){
        return axios.get(url+"/"+id)
    }
    
    UpdateEmployee(id,employee){
        return axios.put(url+"/"+id,employee)
    }
}
export default new EmployeeService();