import React, { Component } from 'react';
import axios from 'axios';

export class CustomerDisplayAll extends Component {

    static displayName = CustomerDisplayAll.name;

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            loading: true,
            companyName: '',
            contactName: '',
            email: '',
            phoneNumber: '',
            address: ''
        }
    }

    componentDidMount() {
        this.populateCustomersData();
    }

    static renderCustomersTable(customers) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        <tr key={customer.customerId}>
                            <td>{customer.customerId}</td>
                            <td>{customer.companyName}</td>
                            <td>{customer.contactName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CustomerDisplayAll.renderCustomersTable(this.state.customers);

        return (
            <div>
                <h1 id="tabelLabel" >Customers</h1>
                {contents}

            </div>
        );
    }

    populateCustomersData = () => {
        this.setState({ loading: true });
        const promise = axios.get("https://localhost:44349/api/HVACCustomers");
        promise
            .then((response) => {
                console.log(response.data);
                const customers = response.data;
                this.setState({ customers, loading: false });
            })
            .catch(() => {
                this.setState({ hasErrors: true });
            });
    };
}