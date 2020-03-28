import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'

// function ourText(){
//   return <p>This is our text.</p>
// }
function App() {
  return (
    <div className="App">
     <Header></Header>
     <p>Main Containt</p>
     <Footer></Footer>
    </div>
  );
}

export default App;
