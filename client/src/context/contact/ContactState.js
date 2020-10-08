import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Steve Medrano',
                phone: '111-111-1111' ,
                email: 'steve@gmail.com',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Bruno Kerger',
                phone: '222-222-2222',
                email:'brunerd@ss.com',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Drew Purdy',
                phone: '333-333-3333',
                email: 'Purdysboob@gmail.com',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = Math.random();
        dispatch({ type: ADD_CONTACT, payload: contact})
    }


    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
           contacts: state.contacts,
           addContact 
        }}>
        
        {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;