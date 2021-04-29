import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import './AllPatient.css'

const AllPatients = () => {
	const [appointments, setAppointments] = useState([]);
	useEffect(() => {
		fetch('http://localhost:7000/appointment')
			.then(res => res.json())
			.then(data => setAppointments(data))
	}, [])
	// console.log(appointments);
	return (
		<div className='container-fluid row '>
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5 style">
				<h5 className='text-brand'>All Patients</h5>
				<AppointmentDataTable appointments={appointments}></AppointmentDataTable>
			</div>
		</div>
	);
};

export default AllPatients;