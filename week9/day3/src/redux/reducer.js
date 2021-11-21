import {CREATE_NEW_CONTACT, REMOVE_CONTACT, GET_ALL_CONTACTS} from './actionType.js'


export const reducer = (state = {names: []}, action = {}) => {
	switch (action.type) {
		case CREATE_NEW_CONTACT:
			return {
				...state,
				names: [...state.names, action.payload]
			};
			break;
		case REMOVE_CONTACT:
			let array = [...state.names];
			array.splice(action.payload,1);
			return {
				names: array
			};
			break;
		case GET_ALL_CONTACTS:
			return {...state};
			break;
		default:
			return {...state};	
	}
}