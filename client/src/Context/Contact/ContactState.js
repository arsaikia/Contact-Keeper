import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts : [
			{
				type  : 'personal',
				id    : 1,
				name  : 'asd',
				email : 'Xsds@asda.com',
				phone : '123-123-1231'
			},
			{
				type  : 'personal',
				id    : 2,
				name  : 'Ted',
				email : 'Xsds@asda.com',
				phone : '123-123-1231'
			},
			{
				type  : 'Professional',
				id    : 3,
				name  : 'Sarah',
				email : 'asffas@asda.com',
				phone : '123-123-1231'
			}
		]
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Curremt Cintact

	// Update Contact

	// Filter Contacts

	// Claer filter

	return <contactContext.Provider value={{ contacts: state.contacts }}>{props.children}</contactContext.Provider>;
};

export default ContactState;
