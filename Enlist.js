import React, { useState } from 'react';
import axios from 'axios';

function Enlist() {
    const [locationName, setLocationName] = useState('');
    const [locationDescription, setLocationDescription] = useState('');
    const [locationPrice, setLocationPrice] = useState('');
    const [locationPicture, setLocationPicture] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEnlist = async () => {
        if (locationName && locationDescription && locationPrice && locationPicture) {
            try {
                const response = await axios.post('http://localhost:8080/addLocation', {
                    LOCATION_NAME: locationName,
                    LOCATION_DESCRIPTION: locationDescription,
                    LOCATION_PRICE: locationPrice,
                    LOCATION_PICTURE: locationPicture,
                });

                console.log(response);
                setSuccessMessage('Location has been enlisted successfully!');
                setErrorMessage('');
                setLocationName('');
                setLocationDescription('');
                setLocationPrice('');
                setLocationPicture('');
            } catch (error) {
                setErrorMessage('Error adding location.');
                console.error(error);
            }
        } else {
            setErrorMessage('Please fill in all fields.');
        }
    };

    return (
        <div className="container-fluid p-4 bg-light rounded">
            <h2 style={{ color: 'black' }}>Enlist Location</h2>
            <p style={{ color: 'black' }}>Provide the details</p>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Location Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Description</label>
                <textarea
                    className="form-control"
                    value={locationDescription}
                    onChange={(e) => setLocationDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Price</label>
                <input
                    type="number"
                    className="form-control"
                    value={locationPrice}
                    onChange={(e) => setLocationPrice(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Picture URL</label>
                <input
                    type="text"
                    className="form-control"
                    value={locationPicture}
                    onChange={(e) => setLocationPicture(e.target.value)}
                />
            </div>

            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <button onClick={handleEnlist} className="btn btn-primary">
                Submit
            </button>
        </div>
    );
}

export default Enlist;
