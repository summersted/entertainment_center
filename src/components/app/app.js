import React from 'react';
import Header from '../header';
import './app.css';
import Footer from '../footer';

const App = () => {
  const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, non blanditiis iure id iusto molestias! Deleniti eos, deserunt, laborum repellat velit quisquam mollitia minus iste ipsa officiis, recusandae totam nostrum vitae! Totam nemo porro cum incidunt necessitatibus ipsam rerum non quam eius tempore, iure voluptate ducimus saepe provident, voluptatem excepturi doloribus. Excepturi obcaecati iste eveniet distinctio nobis earum perferendis.";
  const data = [
    {textHeader: 'Кінотеатр Cinema', label: 'Кінотеатр у нашому центрі розваг! Встагни забронювати квиток...', description: lorem, url: '/media/cinema.jpg', canReserve: true, id: 'ag'},
    {textHeader: 'Боулінг', label: 'Запрошуємо до нашого закладу, щоб розважитися у приємній компанії...', description: lorem, url: '/media/bowlinge.jpg', canReserve: false, id: 'bs'},
    {textHeader: 'Ігрові автомати', label: 'Ігрові атомати, безліч цікавих ігор для дітей та дорослих...', description: lorem, url: '/media/games.jpg', canReserve: false, id: 'bb'},
    {textHeader: 'Каток', label: 'Цілодобовий каток за низькими цінами, запрошуємо всіх!', description: lorem, url: '/media/katok.jpg', canReserve: false, id: 'as'},
    {textHeader: 'Кафе "Вінниця"', label: 'Найсмачніші страви тільки у нас! Не вірите? Спробуйте!', description: lorem, url: '/media/cafe.jpg', canReserve: false, id: 'dn'}
  ];

  return (
    <>
      <Header posts={data}/>
      <Footer/>
    </>
  );
}

export default App;
