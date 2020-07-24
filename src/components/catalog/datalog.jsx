import React from 'react';
import './catalog.css'

const Datalog = ({ data }) => {

  return (
    <div className="ImageApi">
      {data.map((e) => {
        return (
          <div className="div-element">
            <img className="miniature" src={e.miniature} alt='miniature' />
            <p>{e.name}</p>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Datalog;
