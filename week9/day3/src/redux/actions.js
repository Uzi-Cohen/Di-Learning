import {CREATE_NEW_CONTACT, REMOVE_CONTACT, GET_ALL_CONTACTS} from './actionType.js'

export const createContact = (value) => {
	return {
		type: CREATE_NEW_CONTACT,
		payload: value
	}
}

export const deleteContact = (value) => {
	return {
		type: REMOVE_CONTACT,
		payload: value
	}
}

export const getAllContacts = (value) => {
	return {
		type: GET_ALL_CONTACTS,
		payload: value
	}
}