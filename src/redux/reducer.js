// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// // import { setNewFilterValue, addContact, removeContact } from './actions';
// import { setNewFilterValue } from './actions';

// const localContacts = localStorage.getItem('contacts');

// // -> Add contact to Local Storage
// const updateAddToLocalStorage = contact => {
//   const localContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (localContacts) {
//     const newContacts = [...localContacts, contact];
//     localStorage.setItem('contacts', JSON.stringify(newContacts));
//   } else {
//     const newContacts = [contact];
//     localStorage.setItem('contacts', JSON.stringify(newContacts));
//   }
// };

// const contactsInitialState = {
//   contacts: localContacts ? JSON.parse(localContacts) : [],
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     updateAddToLocalStorage(action.payload);
//     return {
//       ...state,
//       contacts: [...state.contacts, action.payload],
//     };
//   },

//   [removeContact]: (state, action) => {
//     const contactsWithDeletedItem = state.contacts.filter(
//       task => task.id !== action.payload.id
//     );
//     localStorage.removeItem('contacts');
//     localStorage.setItem('contacts', JSON.stringify(contactsWithDeletedItem));
//     return {
//       ...state,
//       contacts: contactsWithDeletedItem,
//     };
//   },
// });

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       updateAddToLocalStorage(action.payload);
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };

//     case 'contacts/removeContact':
//       const contactsWithDeletedItem = state.contacts.filter(
//         task => task.id !== action.payload.id
//       );

//       localStorage.removeItem('contacts');
//       localStorage.setItem('contacts', JSON.stringify(contactsWithDeletedItem));

//       return {
//         ...state,
//         contacts: contactsWithDeletedItem,
//       };

//     default:
//       return state;
//   }
// };

// const filterInitialState = { filter: '' };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/newFilter':
//       return {
//         ...state,
//         filter: action.payload.filter,
//       };

//     default:
//       return state;
//   }
// };

// export const filterReducer = createReducer(filterInitialState, {
//   [setNewFilterValue]: (state, action) => {
//     return { ...state, filter: action.payload.filter };
//   },
// });

// -> Require for Persist
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
