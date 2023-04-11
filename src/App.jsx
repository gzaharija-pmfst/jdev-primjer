import { useState } from "react";
import axios from "axios";
import Astronaut from "./Astronaut";
import './App.css'
 
function App() {
  const [ljudi, postaviLjude] = useState([]);
 
  function dohvatiPodatke() {
    axios
      .get("http://api.open-notify.org/astros.json")
      .then(res => postaviLjude(res.data.people))
      .catch(err => alert(err));
  }
 
  return (
    <div className='App'>
      <h1>Astronauti u svemiru!</h1>
      <button onClick={dohvatiPodatke}>Dohvati podatke</button>
      <div className="okvir">
        {ljudi.map(el => (
          <Astronaut key={el.name} name={el.name} craft={el.craft} />
        ))}
      </div>
    </div>
  );
}
 
export default App;
