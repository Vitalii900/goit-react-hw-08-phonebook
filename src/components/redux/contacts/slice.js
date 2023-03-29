import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const myContactsReducerSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [addContact.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return action.payload;
    },
  },
});

export const { filter } = myFilterSlice.actions;
