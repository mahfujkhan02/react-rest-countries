import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LoadCuntries></LoadCuntries>
    
    </div>
  );
}


function LoadCuntries(){
  const [countries , setCountries] = useState([])
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  } , [])
  return(
    <div>
      <h1>Visiting Every countries of the world !!!!</h1>
      <h2>Available Countries : {countries.length}</h2>

      {/* maping krta hbee */}

      {
        countries.map(country => <Country name ={country.name.common} population ={country.population}></Country>)
      }


    </div>
  )
}


function Country(props){
  return (
    <div className='country'>
      <h2>Country : {props.name}</h2>
      <p>Population :{props.population} </p>

    </div>
  )
}

export default App;
