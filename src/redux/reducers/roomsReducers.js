const {
	GET_ROOMS_REGUEST,
	GET_ROOMS_SUCCESS,
	GET_ROOMS_FAILED,
	GET_ROOM_REGUEST,
	GET_ROOM_SUCCESS,
	GET_ROOM_FAILED
} = require('../types');

export const roomsReducer = (state = { rooms: [], room: {} }, actions) => {
	const { type, payload } = actions;
	switch (type) {
		case GET_ROOMS_REGUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case GET_ROOMS_SUCCESS:
			return {
				...state,
				loading: false,
				rooms: [ ...payload ],
				error: ''
			};
		case GET_ROOMS_FAILED:
			return {
				...state,
				loading: false,
				rooms: [],
				error: payload
			};
		case GET_ROOM_REGUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case GET_ROOM_SUCCESS:
			return {
				...state,
				loading: false,
				room: payload,
				error: ''
			};
		case GET_ROOM_FAILED:
			return {
				...state,
				loading: false,
				error: payload
			};

		default:
			return state;
	}
};
