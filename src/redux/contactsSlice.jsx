import { createSlice } from "@reduxjs/toolkit";

const loadContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: loadContacts(),
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    removeContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
