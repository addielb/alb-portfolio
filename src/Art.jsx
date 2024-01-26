import React, { useState } from 'react';

import { arts } from './information/Art.js';

function Art() {
  const [ displayPieces, setDisplayPieces ] = useState(arts);
  const [ isFiltered, setIsFiltered ] = useState(false);
  var key = 0;
  const handleMediumFilter = (med) => {
    setIsFiltered(true);
    const filtered = arts.filter((a) => {
      return a.medium.includes(med)
    })
    setDisplayPieces(filtered);
  }
  const clearFilters = () => {
    setIsFiltered(false);
    setDisplayPieces(arts);
  }
  return (
    <div id="art">
      <div className="artHeaderContainer">
        <h2 className="sectionTitle">
          Some of My Art
        </h2>
        {isFiltered && <button className="button" type="button" onClick={clearFilters}>Clear Filters</button>}
      </div>
      <div className="artPiecesContainer">
        {displayPieces.map((piece) => {
          return (
            <div key={piece.title} className="artPieceContainer">
              <div className="artImgContainer">
                <img className="artImg" src={piece.path}/>
              </div>
              <h4 className="artTitle">{piece.title}</h4>
              <p className="artInfo">{piece.dates}</p>
              <p className="artInfo">{piece.description}</p>
              {piece.medium.map((medium) => {
                return (
                  <button
                    key={key++}
                    type="button"
                    className="button artButton"
                    onClick={(e) => {
                      handleMediumFilter(e.target.firstChild.data);
                    }}
                  >
                    {medium}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Art;