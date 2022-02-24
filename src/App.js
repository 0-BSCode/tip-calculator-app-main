import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import './styles/style.css'

function App() {
  
  return (
    <div className="app">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
