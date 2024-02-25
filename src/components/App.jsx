import { Section } from './section/section';
// import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
// import { useEffect, useState } from 'react';
import { Filter } from './filter/filter';
import { useDispatch} from 'react-redux';
// import { getContacts, getFilters } from './../redux/selectors';
import { setFilter } from './../redux/contactsSlice';

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const filters = useSelector(getFilters);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
 
  // dispatch(addContacts(name, number))
   
  // const addContact = (name, number) => {
  //   const id = nanoid();
  //   const newContact = { name, number, id };
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };
  
 

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  // const handleDelete = id => {
  //   dispatch(deleteContacts(id));
  //   // setContacts(prevContacts =>
  //   //   prevContacts.filter(contact => contact.id !== id)
  //   // );
  // };
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
 
  return (
    <div>
      <Section title={'Phonebook'} />
      <ContactForm />

      <Section title={'Contacts'} />
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList/>
    </div>
  );
};
