import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import './styles/style.css'

function App() {
  // const [search, setSearch] = useState("");
  // const onChange = e => {
  //   e.persist();
  //   setSearch(e.target.value);
  // };

  // console.log("Search message outside useEffect: ", search);

  // useEffect(() => {
  //   console.log("Search message inside useEffect: ", search);
  // }, [search]);


  // return <input onChange={onChange} />;
  return (
    <div className="app">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
