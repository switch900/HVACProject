import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './EditEquipment.css'

const EditEquipment = ({ match }) => {

    const id = match.params.equipmentId;

    const [name, setName] = useState('');
    const [equipments, setEquipments] = useState([]);
    const [equipment, setEquipment] = useState(
        {
            equipmentId: 0,
            name: '',
            locationId: ''
        }
    );

    useEffect(() => {
        const addLocations = async () => {
            const result = await fetch(`https://localhost:44349/api/HVACEquipments/` + id);
            const body = await result.json();
            setEquipment(body);

        };
        addEquipment();
    }, []);


    const onchangeSelect = (item) => {
        setEquipment(item);
    };

    const addEquipment = async () => {
        const result = await fetch(`https://localhost:44349/api/HVACEquipments`, {
            method: 'put',
            body: JSON.stringify({
                name: name,
                locationId: equipment.equipmentId
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
            <h1>{equipment.name}</h1>
            <form>
                <div className="form-group">
                    <p>Name:</p>
                    <input className="form-control" type="text" placeholder="Name"
                        value={name} onChange={(event) => setName(event.target.value)} />
                    <p>Location:</p>
                    <Select
                        value={equipment}
                        onChange={onchangeSelect}
                        options={equipments}
                        getOptionLabel={({ locationName }) => locationName}
                    />
                </div>
                <button onClick={() => addEquipment()} className="btn btn-success" >Add</button>
            </form>
        </div>
    </React.Fragment >
    )
}
export default EditEquipment;
