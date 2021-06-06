import React, { Component } from 'react';
import axios from "axios";

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.onChangeEquipmentName = this.onChangeEquipmentName.bind(this);
        this.onChangeEquipmentLocation = this.onChangeEquipmentLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeEquipmentName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEquipmentLocation(e) {
        this.setState({ location: e.target.value })
    }

    onSubmit(e) {
        
        e.preventDefault()

 
        
        const equipmentObject = {
           // equipmentId:Date.now(),
            name: this.state.name
            /*,
            location: this.state.location*/
        };

        console.log(equipmentObject);
        axios.post('https://localhost:44349/api/HVACEquipments', equipmentObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', location: '' })
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderEquipmentsTable(this.state.equipments);

        return (
            <div>
                <h1 id="tabelLabel" >HVAC Equipment</h1>
                <p>This is a list of all the equipment in the database.</p>
                {contents}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Equipment Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeEquipmentName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Equipment Location</label>
                        <input type="text" value={this.state.location} onChange={this.onChangeEquipmentLocation} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Equipment" className="btn btn-success btn-block" />
                    </div>
                </form>
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
