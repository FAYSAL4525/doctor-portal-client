import React from 'react';
import BuisnessInfo from '../BuisnessInfo/BuisnessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
	return (
		<div className="header-component">
			<Navbar></Navbar>
			<HeaderMain></HeaderMain>
			<BuisnessInfo></BuisnessInfo>
		</div>
	);
};

export default Header;