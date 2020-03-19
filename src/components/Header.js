import React from 'react';
import '../styles/Header.css';

const Header = () => {
	return (
		<div className="navbar mt-2">
			<section className="navbar-section">
				<a href="/" className="btn btn-link">
					Logo Here
				</a>
			</section>
			<section className="navbar-center">
				<a href="/" className="btn btn-link">
					Home
				</a>
				<a href="/" className="btn btn-link">
					Trends
				</a>
				<a href="/" className="btn btn-link">
					Exchanges
				</a>
			</section>
			<section className="navbar-section">
				<div className="input-group input-inline">
					<input type="text" className="form-input" placeholder="search" />
					<button className="btn btn-dark input-group-btn">Search</button>
				</div>
			</section>
		</div>
	);
};

export default Header;
