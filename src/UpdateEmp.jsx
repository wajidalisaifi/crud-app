import React, { useState, useEffect} from 'react'
import { Link, Links, Navigate, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from './Employee/EmployeeService'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies'

export default function UpdateEmp() {

    let {id} = useParams()
    let [data, setData] = useState(
        {
            "id":id,
            "name": "",
            "email": "",
            "phone": "",
            "address": ""
        }
    )
    let datamanage = (event) => {
        let oldData = { ...data }
        let inputName = event.target.name
        let inputValue = event.target.value
        oldData[inputName] = inputValue
        setData(oldData)
    }


    useEffect(() => {
        let GetEmployee = async () => {
            try {
                let emp = await EmployeeService.getEmployeeById(data.id);
                setData(emp.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        GetEmployee();
    }, [])



   
    let navigate = useNavigate()
    let empUpdate = () => {
        EmployeeService.UpdateEmployee(id,data)
        .then((responce)=>{
            console.log("saved data")
           navigate("/")
            
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    return (
        <div className="container">
            <div className='add'>Update Employee</div>
            <div className='flex'>
                <div>Name</div>
                <input type='text' onChange={datamanage} name='name' value={data.name}></input>
            </div>

            <div className='flex'>
                <div>Email</div>
                <input type='email' onChange={datamanage} name='email' value={data.email}></input>
            </div>

            <div className='flex'>
                <div>Phone</div>
                <input type='text' onChange={datamanage} name='phone' value={data.phone}></input>
            </div>

            <div className='flex'>
                <div>Address</div>
                <input type='text' onChange={datamanage} name='address' value={data.address}></input>
            </div>

            <div className='updatebtn'>

            <button onClick={empUpdate}>update</button>

            <button>
                <Link className='lik' to={"/"}>cancel</Link>
            </button>
            </div>

        </div>
    )
}
