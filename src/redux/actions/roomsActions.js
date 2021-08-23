const {
	GET_ROOMS_REGUEST,
	GET_ROOMS_FAILED,
	GET_ROOMS_SUCCESS,
	GET_ROOM_REGUEST,
	GET_ROOM_SUCCESS,
	GET_ROOM_FAILED
} = require('../types');

const BASE_URL = 'http://localhost:5000/rooms/';

export const getRooms = () => async (dispatch) => {
	dispatch({
		type: GET_ROOMS_REGUEST
	});

	try {
		const data = await fetch(BASE_URL);
		const response = await data.json();
		dispatch({
			type: GET_ROOMS_SUCCESS,
			payload: response
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_ROOMS_FAILED,
			payload: 'Faled to load rooms'
		});
	}
};

export const getRoom = (id) => async (dispatch) => {
	dispatch({
		type: GET_ROOM_REGUEST
	});

	try {
		const data = await fetch(BASE_URL + id);
		const response = await data.json();
		dispatch({
			type: GET_ROOM_SUCCESS,
			payload: response
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_ROOM_FAILED,
			payload: 'Faled to load room'
		});
	}
};
