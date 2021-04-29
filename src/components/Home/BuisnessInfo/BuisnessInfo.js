import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
	{
		title: 'Opening Hours',
		description: 'We are open 7 days',
		icon: faClock,
		background:'primary'
	},
	{
		title: 'Visit Our Location',
		description: 'Brooklyn,NY 10008 USA',
		icon: faMapMarker,
		background: 'dark'
	},
	{
		title: 'Call us now',
		description: '+15697854124',
		icon: faPhone,
		background: 'primary'
	}
]
const BuisnessInfo = () => {
	return (
		<section>
			<div className="d-flex justify-content-center">
				<div className='w-75 row'>
					{
						infosData.map(info => <InfoCard info={info}></InfoCard>)
					}
			</div>
		</div>
		</section>
	);
};

export default BuisnessInfo;