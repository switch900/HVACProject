import React, { useState } from 'react';
import './AddEmployeeForm.css'

const AddEmployeeForm = ({ setEmployeeInfo }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [accessLevel, setAccessLevel] = useState('');

    const addEmployee = async () => {
        const result = await fetch(`https://localhost:44349/api/employees`, {
            method: 'post',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                accessLevel: accessLevel
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
                    <p>First Name:</p>
                    <input className="form-control" type="text" placeholder="First Name"
                        value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    <p>Last Name:</p>
                    <input className="form-control" type="text" placeholder="Last Name"
                        value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    <p>Email:</p>
                    <input className="form-control" type="text" placeholder="Email"
                        value={email} onChange={(event) => setEmail(event.target.value)} />
                    <p>Phone Number:</p>
                    <input className="form-control" type="text" placeholder="Phone Number"
                        value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    <p>Access Level:</p>
                    <input className="form-control" type="text" placeholder="Access Level"
                        value={accessLevel} onChange={(event) => setAccessLevel(event.target.value)} />

                </div>
                <button onClick={() => addEmployee()} className="btn btn-success" >Add</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default AddEmployeeForm;
