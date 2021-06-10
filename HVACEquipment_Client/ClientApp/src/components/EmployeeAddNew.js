import React, { Component } from 'react';
import axios from 'axios';

export class EmployeeAddNew extends Component {
    static displayName = EmployeeAddNew.name;

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAccessLevel = this.onChangeAccessLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            employees: [],
            loading: true,
            companyName: '',
            contactName: '',
            email: '',
            phoneNumber: '',
            address: ''
        }
    }


    componentDidMount() {
    }

    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ lastName: e.target.value })
    }
    onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeAccessLevel(e) {
        this.setState({ accessLevel: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const employeeObject = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            PhoneNumber: this.state.phoneNumber,
            AccessLevel: this.state.accessLevel
        };

        console.log(employeeObject);
        axios.post('https://localhost:44349/api/SystemAdmins', employeeObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            accessLevel: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add New Customer</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Access Level</label>
                        <input type="text" value={this.state.accessLevel} onChange={this.onChangeAccessLevel} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Employee" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        );
    }
}

