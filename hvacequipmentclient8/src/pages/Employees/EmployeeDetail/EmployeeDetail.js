import React from 'react';
//import EquipmentList from '../components/EquipmentList';
import NotFoundPage from '../../NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
// import AddEquipmentForm from '../../../ components/AddEquipmentForm/AddEquipmentForm';
import './EmployeeDetail.css';

const EmployeeDetail = ({ match }) => {
    const id = match.params.id;

    const [employeeInfo, setEmployeeInfo] = useState({
        employeeId: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        accessLevel: ''
    });

    const [isEditable, setIsEditable] = useState({
        isEditable: false
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/employees/${id}`);
            const body = await result.json();
            setEmployeeInfo(body);
            setIsEditable(false);
        };
        fetchData();
    }, [id]);



    if (!employeeInfo || employeeInfo === null) return <NotFoundPage />

    // const handleRemoveItem = async (id) => {
    //     const url = 'https://localhost:44349/api/employees/' + id;
    //     fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: null
    //     });
    //     setEmployeeInfo();
    // }

    const handleSaveItem = (id) => {
        setIsEditable(false);
        const url = 'https://localhost:44349/api/employees/' + id;
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
            <h4 className="text-info">{employeeInfo.employeeId}. {employeeInfo.firstName} {employeeInfo.lastName}</h4>

            {isEditable
                ? (<div className="btn-group" role="group" aria-label="First group">
                    <button
                        type="button"
                        className="btn btn-succes"
                        onClick={() => handleSaveItem(employeeInfo.employeeId)}>
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
                    {/* <div className="btn-group" role="group" aria-label="Second group">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveItem(employeeInfo.employeeId)}>
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
                                src={`${employeeInfo.pictureUrl}`} alt={`${employeeInfo.firstName} ${employeeInfo.lastName}`} />
                        </td> */}
                        <td style={{ "width": "65%", "verticalAlign": "top" }}>
                            <p><b>Email:</b> {employeeInfo.email}</p>
                            <p><b>Phone Number: </b>{employeeInfo.phoneNumber}</p>
                            <p><b>Access Level: </b>{employeeInfo.accessLevel}</p>
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
export default EmployeeDetail;
