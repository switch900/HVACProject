import React from 'react';
//import EquipmentList from '../components/EquipmentList';
import NotFoundPage from '../../NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
// import AddEquipmentForm from '../../../ components/AddEquipmentForm/AddEquipmentForm';
import './LocationDetail.css';
import { Link } from 'react-router-dom';

const LocationDetail = ({ match }) => {
    const id = match.params.id;

    const [locationInfo, setLocationInfo] = useState({
        locationId: 0,
        locationName: '',
        address: '',
        city: '',
        province: '',
        postalCode: ''
    });

    const [isEditable, setIsEditable] = useState({
        isEditable: false
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/HVACEquipmentLocations/${id}`);
            const body = await result.json();
            setLocationInfo(body);
            setIsEditable(false);
        };
        fetchData();
    }, [id]);



    if (!locationInfo || locationInfo === null) return <NotFoundPage />

    // const handleRemoveItem = async (id) => {
    //     const url = 'https://localhost:44349/api/HVACEquipmentLocations/' + id;
    //     fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: null
    //     });
    //     setLocationInfo();
    // }

    const handleSaveItem = (id) => {
        setIsEditable(false);
        const url = 'https://localhost:44349/api/HVACEquipmentLocations/' + id;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                // name: this.state.name,
                // location: this.state.location,
            })
        })
            .then(res => res.json()).then(res => {
                if (res) {
                    alert("You have updated the location list" + this.state.locationName);
                }
                else {
                    alert("Not valid information");
                }
            }, function (error) {
                console.log(error.message);
            })

    }

    const handleEditClick = () => {
        setIsEditable(true)
    }

    return (
        <React.Fragment>
            <h4 className="text-info">{locationInfo.locationId}. {locationInfo.locationName}</h4>

            {isEditable
                ? (<div className="btn-group" role="group" aria-label="First group">
                    <button
                        type="button"
                        className="btn btn-succes"
                        onClick={() => handleSaveItem(locationInfo.equipmentId)}>
                        Save
                    </button>
                </div>)
                :
                (<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <Link key={locationInfo.locationId} to={`/editLocation/${locationInfo.locationId}`}>
                            <button
                                style={{ position: "block" }}
                                className="btn btn-primary"
                                type='button'
                                text='Edit Profile'
                            >Edit Location</button>
                        </Link>
                    </div>
                    {/* <div className="btn-group" role="group" aria-label="Second group">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveItem(locationInfo.equipmentId)}>
                            Delete
                        </button>
                    </div> */}
                </div>)
            }

            <table style={{ "width": "90%", "margin": "auto" }}>
                <tbody>
                    <tr>
                        {/* <td style={{ "width": "15%", "verticalAlign": "top" }}>
                            <img className="rounded img-responsive pull-right img-thumbnail float-left"
                                style={{ "width": "50%" }}
                                src={`${locationInfo.pictureUrl}`} alt={`${locationInfo.firstName} ${locationInfo.lastName}`} />
                        </td> */}
                        <td style={{ "width": "65%", "verticalAlign": "top" }}>
                            <p><b>Address: </b>{locationInfo.address}</p>
                            <p><b>City: </b>{locationInfo.city}</p>
                            <p><b>Province: </b>{locationInfo.province}</p>
                            <p><b>Postal Code: </b>{locationInfo.postalCode}</p>
                        </td>
                        {/* <td style={{ "width": "20%", "verticalAlign": "top" }}>
                            <h3>Others:</h3>
                            <EquipmentList exceptId={equipmentInfo.id} />
                        </td> */}
                    </tr>
                </tbody>
            </table>
            {/* <AddEquipmentForm id={id} setEquipmentInfo={setEquipmentInfo} /> */}
        </React.Fragment >
    );
}
export default LocationDetail;
