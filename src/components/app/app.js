import React from 'react';
import Header from '../header';
import './app.css';
import Footer from '../footer';

const App = () => {
  
  const data = [
    {textHeader: 'Cinema', label: 'test', description:'description test', canReserve: true, id: 'ag'},
    {textHeader: 'test', label: 'test', description:'description test', canReserve: false, id: 'bs'},
    {textHeader: 'test', label: 'test', description:'description test', canReserve: false, id: 'bb'},
    {textHeader: 'test', label: 'test', description:'description test', canReserve: false, id: 'as'},
    {textHeader: 'test', label: 'test', description:'description test', canReserve: false, id: 'dn'}
  ];

  return (
    <>
      <Header posts={data}/>
      <Footer/>
    </>
  );
}

export default App;
