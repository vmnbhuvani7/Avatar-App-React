import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
     <Header info="This is header info" value="6"></Header>
     <p>Main Containt</p>
     <Footer author="vmn bhuvani"></Footer>
    </div>
  );
}

export default App;
