import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { removeContact } from "../../redux/contactsSlice";
import PropTypes from "prop-types";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          removeContact={() => dispatch(removeContact(contact.id))}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
  removeContact: PropTypes.func,
};

export default ContactList;
