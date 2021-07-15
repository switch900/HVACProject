import React, { useState } from 'react';
import './AddEmployeeForm.css'

const AddEmployeeForm = ({ setEmployeeInfo }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [accessLevel, setAccessLevel] = useState('');
    const [fields, setFields] = useState({});

    const addEmployee = async () => {
        const result = await fetch(`https://localhost:44349/auth/register`, {
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

    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
            this.userLogin();
        } else {
            alert("Form has errors.")
        }
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //UserName
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }

        // //Password
        // if (!fields["password"]) {
        //     formIsValid = false;
        //     errors["password"] = "Cannot be empty";
        // }

        // console.log(fields);
        // var rgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        // if (!rgx.test(fields["password"])) {
        //     errors["password"] = "Password must contain lowercase, uppercase, number, and special character";
        //     formIsValid = false;
        // }

        // //Email
        // if (!fields["email"]) {
        //     formIsValid = false;
        //     errors["email"] = "Cannot be empty";
        // }

        // if (typeof fields["email"] !== "undefined") {
        //     let lastAtPos = fields["email"].lastIndexOf('@');
        //     let lastDotPos = fields["email"].lastIndexOf('.');

        //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        //         formIsValid = false;
        //         errors["email"] = "Email is not valid";
        //     }

        //     //FirstName
        //     if (!fields["firstname"]) {
        //         formIsValid = false;
        //         errors["firstname"] = "Cannot be empty";
        //     }

        //     //LastName
        //     if (!fields["lastname"]) {
        //         formIsValid = false;
        //         errors["lastname"] = "Cannot be empty";
        //     }

        //     if (!fields["longitude"]) {
        //         formIsValid = false;
        //         errors["longitude"] = "Cannot be empty";
        //     }
        //     if (parseInt(fields["longitude"]) > 180 || parseInt(fields["longitude"]) < -180) {
        //         formIsValid = false;
        //         errors["longitude"] = "Longitude must be between -180 and 180";
        //     }

        //     if (!fields["latitude"]) {
        //         formIsValid = false;
        //         errors["latitude"] = "Cannot be empty";
        //     }

        //     if (parseInt(fields["latitude"]) > 90 || parseInt(fields["latitude"]) < -90) {
        //         formIsValid = false;
        //         errors["latitude"] = "Longitude must be between -90 and 90";
        //     }
    }
    this.setState({ errors: errors });
    return formIsValid;
}

return (<React.Fragment>
    <div className="panel panel-default">
        <form>
            <div className="form-group">
                <p>User Name:</p>
                <input className="form-control" type="text" placeholder="First Name"
                    value={userName} onChange={(event) => setUserName(event.target.value)} />
                <p>Password:</p>
                <input className="form-control" type="text" placeholder="First Name"
                    value={password} onChange={(event) => setPassword(event.target.value)} />
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

export default AddEmployeeForm;
