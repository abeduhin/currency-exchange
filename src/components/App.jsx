// import React , { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactsSlise';
import { filterGange } from 'redux/filterSlise';
import { getContacts, getFilter } from 'redux/selectors';

  export const App = () => {
    // const [contacts, setContacts] = useState (() => {
    // return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    // });
    // Лінива ініціалізація стейту
  //   useEffect(() => {
  //    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);
    
    // const [filter, setFilter] = useState('');

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch()
         
    const handleChange = e => {
      const { value } = e.target;
      dispatch (filterGange(value))
      // dispatch (filterGange(e))
    // setFilter(value);
  };
   // прописуємо фунцію для вводу пошуку
    
    const handleSubmit = ({ name, number }) => {
    // const id = nanoid();
    // const contactsLists = [...contacts];

      if (contacts.findIndex(contact => name.toLowerCase() === contact.name.toLowerCase()) !== -1) {
        //  if (contactsLists.findIndex(contact => name === contact.name) !== -1)
      
        alert(`${name} is already in contacts.`);
        return
      }
       
    // } else {
    //   contactsLists.push({ id, name, number });
      
    // }
    // прописуємо умову - якщо новий елемент списка (name) вже є у списку контактів (метод findIndex повертає індекс відмінний від -1 )(незалежно від регистра метод toLowerCase приводить все до нижньго регистра).то виводимо повідомлення якщо не має то добовляємо до списку контактів
      dispatch(addContacts({ name, number }));
      // console.log(addContacts)
      // setContacts(contactsLists);
    // змінюємо стан  
  };

    const handleDelete = id => {
      // setContacts(contacts.filter(contact => contact.id !== id));
    dispatch(deleteContacts(id));
      
    };
  // прописуємо функцію яка міняє стан при активації кнопки DElete 

    const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
    return filterContactsList;
  };
   // прописуємо функцію яка фільтрує список контактів незважаючі на регистр.

      return (
      <div>
        <h1>Phonebook</h1>
         <ContactForm handleSubmit={handleSubmit} />
         
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
          />
      </div>
    );
  }
// виводимо HTTML розмітку
