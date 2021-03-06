import React from 'react';
import './catalog.css'

const Datalog = ({ data }) => {

  return (
    <div className="ImageApi">
      {data.map((e) => {
        return (
          <div className="div-element">
            <img className="miniature" src={e.miniature} alt='miniature' />
            <h2 className="elementName">{e.name}</h2>
            <p>{e.type}</p>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Datalog;
