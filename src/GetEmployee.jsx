import React, { useEffect, useState } from 'react'
import EmployeeService from './Employee/EmployeeService'
import { Link,  Navigate, useNavigate } from 'react-router-dom'

export default function GetEmployee() {

    let [loading, setLoading] = useState(true)
    let [employee, setEmployee] = useState(null)

    useEffect(() => {

        let GetEmployee = async () => {

            // setLoading(true)
            try {
                let emp = await EmployeeService.getEmployee();
                setEmployee(emp.data)
            }
            catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        GetEmployee();
    }, [])



    let deleteEmp = (id) => {
        EmployeeService.employeeDelete(id)
        .then(()=>{
            

                let emp = employee.filter((employee)=> employee.id !== id)
                setEmployee(emp)
                // setEmployee((prevElement)=>{

                //     return prevElement.filter((employee)=> employee.id !== id)
                // })
            
        })
    }

    const navigater = useNavigate() 
    const editEmp = (e,id) => {
        navigater(`update/${id}`)

    }



    return (
        <div className='arrange'>
            <div className='flex'>
                <button className='btn'>
                    <Link className='lik' to={"save"}>Add Employee</Link>
                </button>
                <span>Employee List</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    (!loading &&

                        <tbody>
                            {
                                employee.map((value, index) => (
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.address}</td>
                                        <td>
                                            <button onClick={()=>deleteEmp(value.id)}>delete</button>

                                            <button onClick={(e,id)=>editEmp(e,value.id)}>
                                               edit 
                                               {/* <Link className='lik' to={`update/${employee.id}`}>update</Link> */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    )
                }
            </table>
        </div>
    )
}
