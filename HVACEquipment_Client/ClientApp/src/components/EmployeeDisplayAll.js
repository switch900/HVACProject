import React, { Component } from 'react';
import axios from 'axios';

export class EmployeeDisplayAll extends Component {

    static displayName = EmployeeDisplayAll.name;

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            loading: true,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            accesLevel: ''
        }
    }

    componentDidMount() {
        this.populateEmployeesData();
    }

    static renderEmployeeTable(employees) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Access Level</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.accessLevel}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : EmployeeDisplayAll.renderEmployeeTable(this.state.employees);

        return (
            <div>
                <h1 id="tabelLabel" >Employees</h1>
                {contents}

            </div>
        );
    }

    populateEmployeesData = () => {
        this.setState({ loading: true });
        const promise = axios.get("https://localhost:44349/api/SystemAdmins");
        promise
            .then((response) => {
                console.log(response.data);
                const employees = response.data;
                this.setState({ employees, loading: false });
            })
            .catch(() => {
                this.setState({ hasErrors: true });
            });
    };
}