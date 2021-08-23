import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { getRooms } from '../redux/actions/roomsActions';

const Home = () => {
	const { loading, rooms, error } = useSelector((state) => state.rooms);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRooms());
	}, []);
	return (
		<div className="home">
			<div className="container home-container">
				<h2 className="listing">Listings</h2>
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<div className="cards">
						{rooms.map(({ id, image, title }) => (
							<div className="card" key={id}>
								<img src={image} alt="Room Image" />
								<div className="card-details">
									<h2>{title}</h2>
									<button>
										<Link to={`/details/${id}`}>book</Link>
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
