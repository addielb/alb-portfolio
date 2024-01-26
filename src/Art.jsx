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
            <div key={piece.title} className="max-w-[40vw] content-center text-center p-4">
              <div className="max-h-[60vh] content-center place-content-center justify-center align-items-center flex">
                <img className="object-cover max-h-[60vh]" src={piece.path}/>
              </div>
              <h4 className="text-2xl pt-2 pb-1">{piece.title}</h4>
              <p className="p-1">{piece.dates}</p>
              <p className="p-1">{piece.description}</p>
              {piece.medium.map((medium) => {
                return (
                  <button
                    key={key++}
                    type="button"
                    className="float-center border-2 border-orange rounded-xl p-4 text-lt-yellow bg-orange m-2"
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