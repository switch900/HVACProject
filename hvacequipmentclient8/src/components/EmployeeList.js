import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './EquipmentList.css'

const EmployeeList = (exceptId) => {
    const [employeeInfo, setEmployeeInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/employees`);
            const body = await result.json();
            setEmployeeInfo(body);
        }
        fetchData();
    }, []);


    var others = Object.values(employeeInfo);
    // if (exceptId !== undefined) {
    //     others = Object.values(employeeInfo).filter(p => p.employeeId !== exceptId.exceptId);
    // }

    // const handleRemoveItem = async (equipmentId) => {
    //     const url = 'https://localhost:44349/api/HVACEquipments/' + equipmentId;
    //     fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: null
    //     });
    //     alert("you deleted equipment ID# " + equipmentId);
    //     const tmp = others.filter(u => u.equipmentId !== equipmentId);
    //     setEquipmentInfo(tmp);
    // }

    const history = useHistory();

    const handleOnClick = useCallback((id) => history.push(`/detail/${id}`), [history]);

    return (
        <>
            <div className="List">
                <button
                    type="button"
                    className="btn btn-success"
                >
                    Add New Employee
                </button>

                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Access Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map((item, key) => (
                            <tr key={item.employeeId} onClick={() => handleOnClick(item.employeeId)}>
                                <td>
                                    {item.employeeId}
                                </td>
                                <td>
                                    {item.firstName}
                                </td>
                                <td>
                                    {item.lastName}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phoneNumber}
                                </td>
                                <td>
                                    {item.accessLevel}
                                </td>
                                {/* <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveItem(item.equipmentId)}>
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeList;
