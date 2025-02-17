import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Contact avatar="https://randomuser.me/api/portraits/lego/6.jpg" name="Basil" online />

        <Contact avatar="https://randomuser.me/api/portraits/lego/4.jpg" name="Markus" online />

        <Contact avatar="https://randomuser.me/api/portraits/lego/8.jpg" name="Aldente" online={false} />

    </div>
  );
}

export default App;
