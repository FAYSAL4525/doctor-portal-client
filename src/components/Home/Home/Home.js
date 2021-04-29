import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Services></Services>
			<FeaturedService></FeaturedService>
			<MakeAppointment></MakeAppointment>
			<Testimonials></Testimonials>
			<Doctors></Doctors>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;