import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
	{
		id: 1,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace:10
	},
	{
		id: 2,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10
	},
	{
		id: 3,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10
	},
		{
		id: 4,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace:10
	},
	{
		id: 5,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10
	},
	{
		id: 6,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10
	}
]
const BookAppointment = ({date}) => {
	return (
		<section>
			<h2 className='text-center text-brand mb-5'>Available Appointment on {date.toDateString()}</h2>
			<div className="row mb-5">
				{
					bookingData.map(booking=><BookingCard key={booking.id} booking={booking} date={date}></BookingCard>)
				}
			</div>
		</section>
	);
};

export default BookAppointment;