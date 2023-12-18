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
    <div className="px-10 pt-2">
      <div className="flex flex-col justify-content-center align-items-center px-10">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
          Some of My Art
        </h2>
        <p className="text-center mb-4 text-xl">
          As an artist by hobby, I want to share a few of my favorite works. My artistic disposition shapes how I approach my code, relationships, and life. Click on the medium below a piece to filter the list to that specific medium.
        </p>
        {isFiltered && <button className="text-center align-items-center justify-content-center border-2 border-orange rounded-xl p-4 text-lt-yellow bg-orange m-2 w-52" type="button" onClick={clearFilters}>Clear Filters</button>}
      </div>
      <div className="flex flex-row flex-wrap mx-10 justify-between">
        {displayPieces.map((piece) => {
          return (
            <div key={piece.title} className="max-w-[40vw] content-center text-center p-4">
              <div className="max-h-[60vh] content-center place-content-center justify-center align-items-center flex">
                <img className="object-cover max-h-[60vh]" src={piece.link}/>
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