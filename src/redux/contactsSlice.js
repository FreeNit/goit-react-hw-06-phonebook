import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const localContacts = localStorage.getItem('contacts');

// -> Add contact to Local Storage
const updateAddToLocalStorage = contact => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));
  if (localContacts) {
    const newContacts = [...localContacts, contact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  } else {
    const newContacts = [contact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  }
};

const contactsInitialState = {
  contacts: localContacts ? JSON.parse(localContacts) : [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        updateAddToLocalStorage(action.payload);
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      },
      prepare(evt) {
        return {
          payload: {
            id: nanoid(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        const contactsWithDeletedItem = state.contacts.filter(
          task => task.id !== action.payload.id
        );
        localStorage.removeItem('contacts');
        localStorage.setItem(
          'contacts',
          JSON.stringify(contactsWithDeletedItem)
        );
        return {
          ...state,
          contacts: contactsWithDeletedItem,
        };
      },
      prepare(actionID) {
        return {
          payload: { id: actionID },
        };
      },
    },
  },
});

// Export actions generator and reducer
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
