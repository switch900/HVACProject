import React, { Component } from 'react';
import axios from "axios";

export class EquipmentDisplayAll extends Component {

    static displayName = EquipmentDisplayAll.name;

    constructor(props) {
        super(props);

        this.state = {
            equipments: [],
            loading: true,
            name: '',
            location: ''
        }
    }

    componentDidMount() {
        this.populateEquipmentData();
    }

    static renderEquipmentsTable(equipments) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Equipment ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map(equipment =>
                        <tr key={equipment.equipmentId}>
                            <td>{equipment.equipmentId}</td>
                            <td>{equipment.name}</td>
                            <td>{equipment.location}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : EquipmentDisplayAll.renderEquipmentsTable(this.state.equipments);

        return (
            <div>
                <h1 id="tabelLabel" >HVAC Equipment</h1>
                <p>This is a list of all the equipment in the database.</p>
                {contents}
               
            </div>
        );
    }

    populateEquipmentData = () => {
        this.setState({ loading: true });
        const promise = axios.get("https://localhost:44349/api/HVACEquipments");
        promise
            .then((response) => {
                console.log(response.data);
                const equipments = response.data;
                this.setState({ equipments, loading: false });
            })
            .catch(() => {
                this.setState({ hasErrors: true });
            });
    };
}
