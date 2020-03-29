import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';
import styled from 'styled-components'

function createAlert(){
  alert('hello. you can click me!');
}
const pStyle = {
  color: 'red',
  fontSize: '2em'
}
const Paragraph = styled.p`
color: 'blue',
fontSize: '3em'
`;

function App() {
  return (
    <div className="App">
     {/* <Header info="This is header info"></Header>
     <p style={pStyle}>Main Containt</p>
     <Paragraph>New Styling </Paragraph>
     <Footer author="vmn bhuvani" myAlert={createAlert} ></Footer> */}
    
    <Numbers />
    </div>
  );
}

export default App;
