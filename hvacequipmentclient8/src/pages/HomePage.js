import React from 'react';
import QrContainer from '../components/QrContainer';

const HomePage = () => (
    <React.Fragment>
        <h1>Scan a QR code to display item details</h1>
        <div>
            <QrContainer />
        </div>
    </React.Fragment>
);

export default HomePage;
