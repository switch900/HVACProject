import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './EditCustomer.css'

const EditCustomer = ({ match }) => {

    const id = match.params.customerId;

    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [customer, setCustomer] = useState(
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
            const result = await fetch(`https://localhost:44349/api/HVACCustomers` + id);
            const body = await result.json();
            setCustomer(body);

        };
        addLocations();
    }, []);


    const onchangeSelect = (item) => {
        setCustomer(item);
    };

    const addCustomer = async () => {
        const result = await fetch(`https://localhost:44349/api/HVACCustomers`, {
            method: 'put',
            body: JSON.stringify({
                companyName: companyName,
                contactName: contactName,
                email: email,
                phoneNumber: phoneNumber,
                address: address
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
                    <p>Company Name:</p>
                    <input className="form-control" type="text" placeholder="Company Name"
                        value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                    <p>Contact Name:</p>
                    <input className="form-control" type="text" placeholder="Contact Name"
                        value={contactName} onChange={(event) => setContactName(event.target.value)} />
                    <p>Email:</p>
                    <input className="form-control" type="text" placeholder="Email"
                        value={email} onChange={(event) => setEmail(event.target.value)} />
                    <p>Phone Number:</p>
                    <input className="form-control" type="text" placeholder="Phone Number"
                        value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    <p>Address:</p>
                    <input className="form-control" type="text" placeholder="Address"
                        value={address} onChange={(event) => setAddress(event.target.value)} />

                </div>
                <button onClick={() => addCustomer()} className="btn btn-success" >Save</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default EditCustomer;
