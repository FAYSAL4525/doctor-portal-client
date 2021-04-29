import React from 'react';
// import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {
	console.log(doctor);
	// const uri = `http://localhost:7000${doctor.img}`
	// console.log(uri);

    return (
        <div className="col-md-4 text-center">
				<img className="img-fluid mb-3" src={`http://localhost:7000${doctor.img}`} alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;