import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert('hello. you can click me!');
}

function App() {
  return (
    <div className="App">
     <Header info="This is header info"></Header>
     <p>Main Containt</p>
     <Footer author="vmn bhuvani" myAlert={createAlert} ></Footer>
    </div>
  );
}

export default App;
