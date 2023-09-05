import React, { useState } from 'react';

function SoftwareProjectBlurb({ title, role, link, description, gifLink }) {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const toggleSize = (e) => {
    e.preventDefault();
    setIsEnlarged(!isEnlarged);
  }
  return (
    <div className={`${isEnlarged ? 'max-h-fit' : 'max-h-80'} overflow-hidden overflow-y-auto shadow-lg`}>
      <h3 className="text-center text-2xl text-bold mb-5">{title}</h3>
      <p className="text-xl italic mb-3">{role}</p>
      <p className="mb-3">{description}</p>
      <button type="button">
        <a target="_blank" href={link}>Learn more</a>
      </button>
      <button className="float-right" type="button" onClick={toggleSize}>{isEnlarged ? "Shrink" : "Expand"}</button>
      <img className="mx-auto" src={gifLink}/>
    </div>
  )
}

export default SoftwareProjectBlurb;