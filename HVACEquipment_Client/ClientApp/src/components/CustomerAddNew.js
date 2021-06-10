import React, { Component } from 'react';
import axios from 'axios';

export class CustomerAddNew extends Component {
    static displayName = CustomerAddNew.name;

    constructor(props) {
        super(props);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customers: [],
            loading: true,
            companyName: '',
            contactName: '',
            email: '',
            phoneNumber:'',
            address: ''
        }
    }
   

    componentDidMount() {
    }

    onChangeCompanyName(e) {
        this.setState({ companyName: e.target.value })
    }

    onChangeContactName(e) {
        this.setState({ contactName: e.target.value })
    }
    onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const customerObject = {
            CompanyName: this.state.companyName,
            ContactName: this.state.contactName,
            Email: this.state.email,
            PhoneNumber: this.state.phoneNumber,
            Address: this.state.address
        };

        console.log(customerObject);
        axios.post('https://localhost:44349/api/HVACCustomers', customerObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            companyName: '',
            contactName: '',
            email: '',
            phoneNumber: '',
            address: ''
        })
    }

    render() {
        return (
             <div>
                <h1>Add New Customer</h1>
  
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" value={this.state.companyName} onChange={this.onChangeCompanyName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Contact Name</label>
                        <input type="text" value={this.state.contactName} onChange={this.onChangeContactName} className="form-control" />
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
                        <label>Address</label>
                        <input type="text" value={this.state.address} onChange={this.onChangeAddress} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Customer" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        );
    }
}

   