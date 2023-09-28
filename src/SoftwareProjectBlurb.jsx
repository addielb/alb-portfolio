import React, { useState } from 'react';

function SoftwareProjectBlurb({ title, role, link, description, gifLink }) {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const toggleSize = (e) => {
    e.preventDefault();
    setIsEnlarged(!isEnlarged);
  }
  return (
    <div className={`${isEnlarged ? 'max-h-fit' : 'max-h-80'} overflow-hidden overflow-y-auto shadow-lg px-5 rounded-3xl`}>
      <h3 className="text-center text-2xl text-bold mb-5">{title}</h3>
      <p className="text-xl italic mb-3">{role}</p>
      <p className="mb-3">{description}</p>
      <button type="button" className="border-2 border-black rounded-xl px-2">
        <a target="_blank" href={link}>Learn more</a>
      </button>
      <button className="float-right border-2 border-black rounded-xl px-2" type="button" onClick={toggleSize}>{isEnlarged ? "Shrink" : "Expand"}</button>
      <img className="mx-auto pt-5" src={gifLink}/>
    </div>
  )
}

export default SoftwareProjectBlurb;