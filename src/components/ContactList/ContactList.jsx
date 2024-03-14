import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';

import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};
