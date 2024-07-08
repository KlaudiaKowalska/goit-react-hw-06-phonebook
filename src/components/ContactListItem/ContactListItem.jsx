import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.scss";

const ContactListItem = ({ contact, removeContact }) => {
  const handleRemoveClick = () => {
    removeContact(contact.id);
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleRemoveClick} className={styles.buttonDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
