import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Wrapper, Title, SubTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts.length === 0 ? (
        <p>You don't have any contacts yet.</p>
      ) : (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </Wrapper>
  );
};
