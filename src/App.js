import { useState } from 'react';
import './App.css'
import EmployeeSerivce from './Employee/EmployeeService';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import EmployeeService from './Employee/EmployeeService';
import { Link } from 'react-router-dom';

function App() {
  let [data, setData] = useState(
    {
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

  let saveEmployee = () => {
    EmployeeService.saveEmployee(data)
    setData(
      {
        "name": "",
        "email": "",
        "phone": "",
        "address": ""
      }
    )
  }


  return (
    <div className="container">
      <div className='add' >Add Employee</div>
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
      <button onClick={saveEmployee}>save</button>

      <button><Link to={"/"} className='lik'>show</Link></button>
      </div>

    </div>
  );
}
export default App;
