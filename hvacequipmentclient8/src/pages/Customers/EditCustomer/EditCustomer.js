import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './EditCustomer.css'

const EditCustomer = ({ match }) => {

    const id = match.params.customerId;

    const [name, setName] = useState('');
    const [customers, setCustomers] = useState([]);
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
                name: name,
                locationId: customer.locationId
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
                        value={customer}
                        onChange={onchangeSelect}
                        options={customers}
                        getOptionLabel={({ locationName }) => locationName}
                    />
                </div>
                <button onClick={() => addCustomer()} className="btn btn-success" >Add</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default EditCustomer;
