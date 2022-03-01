import './App.css';
import{useState} from 'react'
import Axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')  
  const [wage, setWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    console.log(name)
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log('post request succes')
    });
  }

  const getEmployee = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)      
    });
  }

  return<div className="App">
  <div className='information'>
    <label>Name</label>
    <input type='text'
    onChange={(event) =>{
      setName(event.target.value);
    }}/>
    <label>Age</label>
    <input type='number' onChange={(event) =>{
      setAge(event.target.value)
    }}/>
    <label>Country</label>
    <input type='text'onChange={(event) =>{
      setCountry(event.target.value)
    }}/>
    <label>Position</label>
    <input type='text'onChange={(event) =>{
      setPosition(event.target.value)
    }}/>
    <label>Wage (year)</label>
    <input type='text'
    onChange={(event) =>{
      setWage(event.target.value)
    }}/>
    <button onClick={addEmployee}>Add Employee</button>
  </div>
  <div className='employees'>
  <button onClick={getEmployee}>Show Employees</button>
    {employeeList.map((val, key) => {
      return<div className='employee'>
        <p>{val.name}</p>
        <p>{val.age}</p>
        <p>{val.country}</p>
        <p> {val.position}</p>
        <p>{val.wage}</p>
        </div>})}
  </div>
  </div>
}

export default App;
