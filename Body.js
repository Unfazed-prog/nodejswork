import React from 'react';
import {Link} from 'react-router-dom';
function Body(){
        return(
        <div className="body-container d-flex flex-column align-items-center justify-content-center text-center">
                <div className='welcome-message-container d-flex justify-content-center align-items-center'>
                        <div className='welcome-message p-4 bg-info text-light rounded'>
                                <h1>Welcome to ParkHelp</h1>
                                <p>Where we help you find parking spaces Easiy</p>
                                <Link to='/location'>
                                <button className="btn btn-primary" id="LocationBtn" style={{marginRight:'10px'}}>Find Location</button>
                                </Link>
                                <Link to='/enlist'>
                                <button className="btn btn-secondary"  id="EnlistBtn">Enlist</button>
                                </Link>
                        </div>
                </div>

        </div>
        )
}
export default Body;