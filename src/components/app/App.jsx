import React from 'react';
import './App.css';
import NavBar from '/src/components/navbar/NavBar';  
import Main from '../main/Main';
import FetchApi from '../api/FetchAPI';


const App = () => {
  return (
    <section className='music'>
      <NavBar/>
      <Main />
      <FetchApi />
    </section>
    
  );
}
export default App;
