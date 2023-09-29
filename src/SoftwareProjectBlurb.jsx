import React, { useState } from 'react';

function SoftwareProjectBlurb({ title, role, link, description, gifLink }) {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const toggleSize = (e) => {
    e.preventDefault();
    setIsEnlarged(!isEnlarged);
  }
  return (
    <div className={`${isEnlarged ? 'max-h-fit' : 'max-h-[370px]'} overflow-hidden overflow-y-auto shadow-lg p-5 rounded-3xl bg-dark-yellow text-lt-yellow`}>
      <h3 className="text-center text-2xl text-bold mb-5">{title}</h3>
      <p className="text-xl italic mb-3">{role}</p>
      <p className="mb-3">{description}</p>
      <div className="relative flex content-end justify-between">
        <button type="button" className="border-2 border-orange text-lt-yellow bg-orange p-4 rounded-xl">
          <a target="_blank" href={link}>Learn more</a>
        </button>
        <button className="float-right border-2 border-orange rounded-xl p-4 text-lt-yellow bg-orange" type="button" onClick={toggleSize}>{isEnlarged ? "Close Demo" : "Show Demo"}</button>
      </div>
      {isEnlarged && <img className="mx-auto pt-5" src={gifLink}/>}
    </div>
  )
}

export default SoftwareProjectBlurb;