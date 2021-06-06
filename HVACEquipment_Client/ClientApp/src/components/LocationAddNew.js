import React, { Component } from 'react';
import axios from 'axios';

export class LocationAddNew extends Component {
    static displayName = LocationAddNew.name;

    constructor(props) {
        super(props);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            locations: [],
            loading: true,
            address: ''
        }
    }


    componentDidMount() {
    }

   
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const locationObject = {
            Address: this.state.address
        };

        console.log(locationObject);
        axios.post('https://localhost:44349/api/HVACEquipmentLocations', locationObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            address: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add New Customer</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" value={this.state.address} onChange={this.onChangeAddress} className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create Location" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        );
    }
}

