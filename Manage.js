import React, { useState } from 'react';
import axios from 'axios';

function Manage() {
    const [locationName, setLocationName] = useState('');
    const [locationDescription, setLocationDescription] = useState('');
    const [locationPrice, setLocationPrice] = useState(0);
    const [locationPicture, setLocationPicture] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [locationFound, setLocationFound] = useState(false); // To track if location is found

    // Search for a location by name
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/location?name=${locationName}`);
            if (response.status === 200) {
                const location = response.data;
                setLocationDescription(location.LOCATION_DESCRIPTION);
                setLocationPrice(location.LOCATION_PRICE);
                setLocationPicture(location.LOCATION_PICTURE);
                setSuccessMessage('Location found!');
                setErrorMessage('');
                setLocationFound(true);
            } else {
                setErrorMessage('Location not found.');
                setSuccessMessage('');
                setLocationFound(false);
            }
        } catch (error) {
            console.error('Error searching location:', error);
            setErrorMessage('Error searching location.');
            setSuccessMessage('');
            setLocationFound(false);
        }
    };
    

    // Update a location by name
    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/location`, {
                LOCATION_NAME: locationName,
                LOCATION_DESCRIPTION: locationDescription,
                LOCATION_PRICE: locationPrice,
                LOCATION_PICTURE: locationPicture,
            });

            if (response.status === 200) {
                setSuccessMessage('Location updated successfully!');
                setErrorMessage('');
            } else {
                setErrorMessage('Failed to update location.');
            }
        } catch (error) {
            setErrorMessage('Error updating location.');
            console.error(error);
        }
    };

    // Delete a location by name
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/location`, {
                data: { LOCATION_NAME: locationName },
            });
            if (response.status === 200) {
                setSuccessMessage('Location deleted successfully!');
                setLocationName('');
                setLocationDescription('');
                setLocationPrice(0);
                setLocationPicture('');
                setErrorMessage('');
                setLocationFound(false); // Reset the form after deletion
            } else {
                setErrorMessage('Failed to delete location.');
            }
        } catch (error) {
            setErrorMessage('Error deleting location.');
            console.error(error);
        }
    };

    return (
        <div className="container-fluid p-4 bg-light rounded">
            <h2 style={{ color: 'black' }}>Manage Location</h2>
            <p style={{ color: 'black' }}>Search, update, or delete a location</p>

            {/* Search Section */}
            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Location Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                />
                <button onClick={handleSearch} className="btn btn-primary mt-2">
                    Search Location
                </button>
            </div>

            {/* Success and Error Messages */}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            {/* Location Details Section (only visible if location is found) */}
            {locationFound && (
                <div>
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

                    {/* Update and Delete Buttons */}
                    <div className="mt-3">
                        <button onClick={handleUpdate} className="btn btn-success">
                            Update Location
                        </button>
                        <button onClick={handleDelete} className="btn btn-danger ml-3">
                            Delete Location
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Manage;
