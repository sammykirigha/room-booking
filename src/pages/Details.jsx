import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getRoom } from '../redux/actions/roomsActions';

import '../styles/Details.css';

const Details = () => {
	const { id } = useParams();
	const { loading, room, error } = useSelector((state) => state.rooms);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRoom(id));
	}, []);

	if (loading) {
		return <h1>Loading....</h1>;
	}

	return (
		<div>
			<div className="container details-container">
				<h1>Details</h1>
				{room.id && (
					<div className="details-card">
						<div className="details-image">
							<img src={room.image} />
						</div>

						<div className="details-info">
							<div className="description">
								<h2>{room.title}</h2>
								<p>{room.description}</p>
							</div>
							<div className="room-details">
								<span>
									Price: <strong>KSH {room.price}</strong>
								</span>
								<span>
									Rating: <strong>{room.rating} times</strong>
								</span>
								<span>
									Review: <strong>Lorem, ipsum dolor.</strong>
								</span>
								<span>
									Location: <strong>Ringroad</strong>
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Details;
