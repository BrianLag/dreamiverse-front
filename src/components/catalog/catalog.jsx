import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import Datalog from './datalog';

function Catalog(){
  const [database, setData]= useState([]);

  /*useEffect(() => {
    catchInfo();
  },  [database.name])
  */


  function catchInfo() {
    const url = 'http://localhost:8000/database';
    axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setData(data)
      })
      .catch(() => {
        alert('Vos informations sont incorrectes');
      });
  }

  return (
    <div className="divpage">
      <h1> Barre de recherche</h1> 
    <div>
        <p>filtre par:</p>
        <button>type</button>
        <button>date</button>
        <div>
          <button onClick={() => catchInfo()}>lancer la recherche</button>
        </div>
      </div>
      <div>
        <Datalog data={database}/>
      </div>
    </div>
  )
}

export default Catalog;
