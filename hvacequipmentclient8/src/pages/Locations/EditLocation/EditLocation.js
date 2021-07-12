import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './EditLocation.css';

const EditLocation = ({ match }) => {

    const id = match.params.locationId;

    const [name, setName] = useState('');
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState(
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
            const result = await fetch(`https://localhost:44349/api/HVACEquipmentLocations` + id);
            const body = await result.json();
            setLocation(body);

        };
        addLocations();
    }, []);


    const onchangeSelect = (item) => {
        setLocation(item);
    };

    const addEquipment = async () => {
        const result = await fetch(`https://localhost:44349/api/HVACEquipmentLocations`, {
            method: 'put',
            body: JSON.stringify({
                name: name,
                locationId: location.locationId
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
                        value={location}
                        onChange={onchangeSelect}
                        options={locations}
                        getOptionLabel={({ locationName }) => locationName}
                    />
                </div>
                <button onClick={() => addEquipment()} className="btn btn-success" >Add</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default EditLocation;
