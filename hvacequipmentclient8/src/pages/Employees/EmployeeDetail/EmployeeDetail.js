import React from 'react';
import NotFoundPage from '../../NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
import './EmployeeDetail.css';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/employees/${id}`);
            const body = await result.json();
            setEmployeeInfo(body);
        };
        fetchData();
    }, [id]);



    if (!employeeInfo || employeeInfo === null) return <NotFoundPage />

    return (
        <React.Fragment>
            <div className="detailPageContainer">
                <h4 className="text-info">{employeeInfo.employeeId}. {employeeInfo.firstName} {employeeInfo.lastName}</h4>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <Link key={employeeInfo.employeeId} to={`/editEmployee/${employeeInfo.employeeId}`}>
                            <button
                                style={{ position: "block" }}
                                className="btn btn-primary"
                                type='button'
                                text='Edit Profile'
                            >Edit Employee</button>
                        </Link>
                    </div>
                </div>)
                }
                <table style={{ "width": "90%", "margin": "auto" }}>
                    <tbody>
                        <tr>
                            <td style={{ "width": "65%", "verticalAlign": "top" }}>
                                <p><b>Email:</b> {employeeInfo.email}</p>
                                <p><b>Phone Number: </b>{employeeInfo.phoneNumber}</p>
                                <p><b>Access Level: </b>{employeeInfo.accessLevel}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    );
}
export default EmployeeDetail;
