import React from 'react';
//import EquipmentList from '../components/EquipmentList';
import NotFoundPage from '../../NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
// import EditEquipment from '../EditEquipment/EditEquipment';
import { Link } from 'react-router-dom';

import './EquipmentDetail.css';

const EquipmentDetail = ({ match }) => {
    const id = match.params.id;

    const [equipmentInfo, setEquipmentInfo] = useState({
        id: 0,
        name: '',
        location: 0,

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

    // const handleRemoveItem = async (equipmentId) => {
    //     const url = 'https://localhost:44349/api/HVACEquipments/' + equipmentId;
    //     fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: null
    //     });
    //     setEquipmentInfo();
    // }

    const handleSaveItem = (equipmentId) => {
        setIsEditable(false);
        alert("You have updated the equipment list " + equipmentId);
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
                equipmentId: equipmentInfo.equipmentId,
                name: equipmentInfo.name,
                locationId: equipmentInfo.location.locationId,
            })
        })
            .then(res => res.json()).then(res => {
                if (res) {
                    alert("You have updated the equipment list " + equipmentInfo.name);
                }
                else {
                    alert("Not valid information");
                }
            }, function (error) {
                console.log(error.message);
            })

    }

    // const myChangeHandler = event => {
    //     const { name, value } = event.target
    //     setEquipmentInfo({ ...equipmentInfo, [name]: value })
    // }

    // const mySubmitHandler = event => {
    //     event.preventDefault();
    //     handleSaveItem();
    //     // window.location.href = '/equipmentDetail/' + localStorage.getItem('id');
    // }

    // const handleEditClick = () => {
    //     setIsEditable(true)
    // }

    return (
        <React.Fragment>
            <div className="detailPageContainer">
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
                            <Link key={equipmentInfo.equipmentId} to={`/editEquipment/${equipmentInfo.equipmentId}`}>
                                <button
                                    style={{ position: "block" }}
                                    className="btn btn-primary"
                                    type='button'
                                    text='Edit Profile'
                                >Edit Profile</button>
                            </Link>
                        </div>
                        {/* <div className="btn-group" role="group" aria-label="Second group">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveItem(equipmentInfo.equipmentId)}>
                            Delete
                        </button>
                    </div> */}
                    </div>)
                }

                {/* <form onSubmit={mySubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Equipment Name:</label>
                        <input
                            type='text'
                            defaultValue={equipmentInfo.name}
                            className="form-control"
                            name='name'
                            onChange={myChangeHandler}
                        />
                        {/* <span style={{ color: "red" }}>{childInfo.userNameError}</span> */}
                {/* </div>
                </form> * /} */}
                < table style={{ "width": "90%", "margin": "auto" }
                }>
                    <tbody>
                        <tr>
                            {/* <td style={{ "width": "15%", "verticalAlign": "top" }}>
                            <img className="rounded img-responsive pull-right img-thumbnail float-left"
                                style={{ "width": "50%" }}
                                src={`${equipmentInfo.pictureUrl}`} alt={`${equipmentInfo.firstName} ${equipmentInfo.lastName}`} />
                        </td> */}
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
                </table >
            </div >
            {/* <input className="btn btn-primary"
                type='submit'
                text='Save'
            /> */}
            {/* <EditEquipmentForm equipmentId={id} /> */}
            {/* <AddEquipmentForm id={id} setEquipmentInfo={equipmentInfo} /> */}
        </React.Fragment >
    );
}
export default EquipmentDetail;
