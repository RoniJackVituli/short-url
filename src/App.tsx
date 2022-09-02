import React ,{Fragment}from 'react';

import './App.css';
import Shorturl from './components/Shorturl/Shorturl';
import Footer from './components/UI/Footer';
import Nav from './components/UI/Nav';

const App = ()  => {
  return (
    <Fragment>  
    <Nav/>
    <div className='App'>
      <Shorturl/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
