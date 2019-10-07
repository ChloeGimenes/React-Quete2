import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Contact avatar="https://randomuser.me/api/portraits/lego/6.jpg" name={Miguel} online/>

        <Contact avatar="https://randomuser.me/api/portraits/lego/4.jpg" name={Markus} online/>

        <Contact avatar="https://randomuser.me/api/portraits/lego/8.jpg" name={Aldente} offline/>

    </div>
  );
}

export default App;
