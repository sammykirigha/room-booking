import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="navbar">
			<div className="container navbar-container">
				<div className="navbar__brand">
					<span>Room-Booking</span>
				</div>
				<div className="navbar__search">
					<div className="search__container">
						<i style={{ padding: '0 7px' }} class="fas fa-search" />
						<input
							style={{ outline: 'none', border: 'none', background: 'transparent' }}
							type="search"
							name=""
							id=""
						/>
					</div>
				</div>
				<div className="navbar__buttons">
					<Link to="/">Home</Link>
					<Link to="/rooms">Rooms</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
