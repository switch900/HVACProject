import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ListStyle.css';
import { Link } from 'react-router-dom';

const EmployeeList = (match) => {
    // const id = match.params.id;
    const [employeeInfo, setEmployeeInfo] = useState({});

    useEffect(() => {
        const url = 'https://localhost:44349/api/employees';

        const fetchData = async () => {
            const result = await fetch(url, {
                method: 'get',
                headers: new Headers({
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                })
            });
            const body = await result.json();
            setEmployeeInfo(body);
        }
        fetchData();
    }, []);


    var others = Object.values(employeeInfo);
    // if (exceptId !== undefined) {
    //     others = Object.values(employeeInfo).filter(p => p.employeeId !== exceptId.exceptId);
    // }

    const handleRemoveItem = async (employeeId) => {
        const url = 'https://localhost:44349/api/employees/' + employeeId;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        });
        alert("you deleted employee ID# " + employeeId);
        const tmp = others.filter(u => u.employeeId !== employeeId);
        setEmployeeInfo(tmp);
    }

    const history = useHistory();

    const handleOnClick = useCallback((id) => history.push(`/employeeDetail/${id}`), [history]);

    return (
        <>
            <div className="List">
                <Link to="/addEmployee">
                    <button
                        type="button"
                        className="btn btn-success"
                    >
                        Add New Employee
                    </button>
                </Link>
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
                            <tr key={item.employeeId}
                                onClick={() => handleOnClick(item.employeeId)}
                            >
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
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveItem(item.employeeId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeList;
