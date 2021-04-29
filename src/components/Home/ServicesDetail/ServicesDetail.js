import React from 'react';

const ServicesDetail = ({services}) => {
	return (
		<div className='col-md-4 text-center'>
			<img style={{height:'50px'}} src={services.img} alt="" />
			<h5 className='mt-3 mb-3'>{services.name}</h5>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus possimus nihil et consequatur explicabo.</p>
		</div>
	);
};

export default ServicesDetail;