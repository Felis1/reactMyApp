import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
    return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Main />abra cadabra
    </div>
    );
}

export default App;