import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './EditEmployee.css'

const EditEmployee = ({ match }) => {

    const id = match.params.employeeId;

    const [name, setName] = useState('');
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState(
        {
            locationId: 0,
            locationName: '',
            address: '',
            city: '',
            province: '',
            postalCode: ''
        }
    );

    useEffect(() => {
        const addLocations = async () => {
            const result = await fetch(`https://localhost:44349/api/employees` + id);
            const body = await result.json();
            setEmployee(body);

        };
        addEmployee();
    }, []);


    const onchangeSelect = (item) => {
        setEmployee(item);
    };

    const addEmployee = async () => {
        const result = await fetch(`https://localhost:44349/api/employees`, {
            method: 'put',
            body: JSON.stringify({
                name: name,
                locationId: employee.locationId
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();

        console.log(body);
    }

    return (<React.Fragment>
        <div className="panel panel-default">
            <form>
                <div className="form-group">
                    <p>Name:</p>
                    <input className="form-control" type="text" placeholder="Name"
                        value={name} onChange={(event) => setName(event.target.value)} />
                    <p>Location:</p>
                    <Select
                        value={employee}
                        onChange={onchangeSelect}
                        options={employees}
                        getOptionLabel={({ locationName }) => locationName}
                    />
                </div>
                <button onClick={() => addEmployee()} className="btn btn-success" >Add</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default EditEmployee;
