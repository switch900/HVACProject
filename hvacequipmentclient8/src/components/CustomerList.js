import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './EquipmentList.css'

const CustomerList = (exceptId) => {
    const [customerInfo, setCustomerInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://localhost:44349/api/HVACCustomers`);
            const body = await result.json();
            setCustomerInfo(body);
        }
        fetchData();
    }, []);

    var others = customerInfo;

    if (exceptId !== undefined) {
        others = Object.values(customerInfo).filter(p => p.customerId !== exceptId.exceptId);
    }

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
                    Add New Customer
                </button>

                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map((item, key) => (
                            <tr key={item.customerId} onClick={() => handleOnClick(item.customerId)}>
                                <td>
                                    {item.customerId}
                                </td>
                                <td>
                                    {item.companyName}
                                </td>
                                <td>
                                    {item.contactName}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phoneNumber}
                                </td>
                                <td>
                                    {item.address}
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

export default CustomerList;
