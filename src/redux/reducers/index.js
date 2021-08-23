import { combineReducers } from 'redux';
import { roomsReducer } from './roomsReducers';

const rootReducer = combineReducers({
	rooms: roomsReducer
});

export default rootReducer;
