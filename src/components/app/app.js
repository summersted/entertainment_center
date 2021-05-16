import React from 'react';
import Header from '../header';
import './app.css';
import Footer from '../footer';

const App = () => {
  
  const data = [
    {textHeader: 'Cinema', label: 'Кінотеатр у нашому центрі розваг! Встагни забронювати квиток...', description:'description test', canReserve: true, id: 'ag'},
    {textHeader: 'Боулінг', label: 'Запрошуємо до нашого закладу, щоб розважитися у приємній компанії...', description:'description test', canReserve: false, id: 'bs'},
    {textHeader: 'Ігрові автомати', label: 'Ігрові атомати, безліч цікавих ігор для дітей та дорослих...', description:'description test', canReserve: false, id: 'bb'},
    {textHeader: 'Каток', label: 'Цілодобовий каток за низькими цінами, запрошуємо всіх!', description:'description test', canReserve: false, id: 'as'},
    {textHeader: 'Кафе "Вінниця"', label: 'Найсмачніші страви тільки у нас! Не вірите? Спробуйте!', description:'description test', canReserve: false, id: 'dn'}
  ];

  return (
    <>
      <Header posts={data}/>
      <Footer/>
    </>
  );
}

export default App;
