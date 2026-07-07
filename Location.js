import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Location = () => {
    const [locations, setLocations] = useState([]);

    const fetchLocations = async () => {
        try {
            const response = await axios.get("http://localhost:8080/locations");
            setLocations(response.data);
        } catch (error) {
            console.error("Error fetching locations:", error);
        }
    };

    const handleBooking = (locationId) => {
        // Find the location by its ID and update its booking status
        setLocations(prevLocations =>
            prevLocations.map(location =>
                location._id === locationId
                    ? { ...location, booked: true }
                    : location
            )
        );
        alert('Location booked');
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    return (
        <div className="container-fluid p-4 bg-light rounded">
            <h2 className="text-dark">Available Locations</h2>
            <p className="text-dark">Explore the listed locations</p>

            <div className="row">
                {locations.map((location) => (
                    <div
                        key={location._id}
                        className="col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
                    >
                        <div className="card" style={{ width: '100%' }}>
                            <img
                                src={location.LOCATION_PICTURE || "https://via.placeholder.com/150"}
                                className="card-img-top"
                                alt={location.LOCATION_NAME}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">Name</h5>
                                <p className="card-text text-dark">{location.LOCATION_NAME}</p>
                                <h5 className="card-title text-primary">Description</h5>
                                <p className="card-text text-dark">{location.LOCATION_DESCRIPTION}</p>
                                <h5 className="card-title text-primary">Price</h5>
                                <p className="card-text text-dark">{location.LOCATION_PRICE} OMR</p>

                                {/* Conditionally render Pay/Booked button */}
                                {location.booked ? (
                                    <button className="btn btn-secondary" disabled>
                                        Booked
                                    </button>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => handleBooking(location._id)}>
                                        Pay
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Location;
