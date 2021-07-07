import React from 'react';
//import EquipmentList from '../components/EquipmentList';
import NotFoundPage from './NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
import AddEquipmentForm from '../components/AddEquipmentForm';
import './EquipmentDetailPage.css';

const EquipmentDetailPage = ({ match }) => {
    const id = match.params.id;

    const [equipmentInfo, setEquipmentInfo] = useState({
        id: 0,
        name: '',
        location: '',

    });

    const [isEditable, setIsEditable] = useState({
        isEditable: false
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/HVACEquipments/${id}`);
            const body = await result.json();
            setEquipmentInfo(body);
            setIsEditable(false);
        };
        fetchData();
    }, [id]);



    if (!equipmentInfo || equipmentInfo === null) return <NotFoundPage />

    const handleRemoveItem = async (equipmentId) => {
        const url = 'https://localhost:44349/api/HVACEquipments/' + equipmentId;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        });
        setEquipmentInfo();
    }

    const handleSaveItem = (equipmentId) => {
        setIsEditable(false);
        const url = 'https://localhost:44349/api/HVACEquipments/' + equipmentId;
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
                name: this.state.name,
                location: this.state.location,
            })
        })
            .then(res => res.json()).then(res => {
                if (res) {
                    alert("You have updated the equipment list" + this.state.username);
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
            <h4 className="text-info">{equipmentInfo.equipmentId}. {equipmentInfo.name}</h4>

            {isEditable
                ? (<div className="btn-group" role="group" aria-label="First group">
                    <button
                        type="button"
                        className="btn btn-succes"
                        onClick={() => handleSaveItem(equipmentInfo.equipmentId)}>
                        Save
                    </button>
                </div>)
                :
                (<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick()}>
                            Edit
                        </button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Second group">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveItem(equipmentInfo.equipmentId)}>
                            Delete
                        </button>
                    </div>
                </div>)
            }

            <table style={{ "width": "90%", "margin": "auto" }}>
                <tbody>
                    <tr>
                        <td style={{ "width": "15%", "verticalAlign": "top" }}>
                            <img className="rounded img-responsive pull-right img-thumbnail float-left"
                                style={{ "width": "50%" }}
                                src={`${equipmentInfo.pictureUrl}`} alt={`${equipmentInfo.firstName} ${equipmentInfo.lastName}`} />
                        </td>
                        <td style={{ "width": "65%", "verticalAlign": "top" }}>
                            <p><b>Location: {equipmentInfo.location.locationName}</b></p>
                            <p><b>Address: </b>{equipmentInfo.location.address}</p>
                            <p><b>City: </b>{equipmentInfo.location.city}</p>
                            <p><b>Province: </b>{equipmentInfo.location.province}</p>
                            <p><b>Postal Code: </b>{equipmentInfo.location.postalCode}</p>
                        </td>
                        {/* <td style={{ "width": "20%", "verticalAlign": "top" }}>
                            <h3>Others:</h3>
                            <EquipmentList exceptId={equipmentInfo.id} />
                        </td> */}
                    </tr>
                </tbody>
            </table>
            <AddEquipmentForm id={id} setEquipmentInfo={setEquipmentInfo} />
        </React.Fragment >
    );
}
export default EquipmentDetailPage;
