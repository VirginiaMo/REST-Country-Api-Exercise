
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[countries, setCountries] = useState([]);
useEffect(()=>{
const getCountries = async()=>{
 const response = await fetch('https://restcountries.eu/rest/v2/region/europe')
 const jsonResponse = await response.json();
 setCountries(jsonResponse);
}
getCountries();
}, []);

  return (
    <div className="App">
      <h1>Countries Drop Down List </h1>
      <select name="country" className="form">
   {
     countries.map((country, index)=>{
return <option key={`${country.name}-${index} `}>{country.name}</option>
     })
   }
     </select>
    </div>
  );
}

export default App;
