/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function SoftwareProjectBlurb({ title, role, link, description, path }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleSize = (e) => {
    e.preventDefault();
    setIsEnlarged(!isEnlarged);
  }
  return (
    <div className={`${isEnlarged ? 'softwareBlurbContainerMax' : 'softwareBlurbContainerMin'} softwareBlurbContainer`}>
      <h3 className="softwareBlurbTitle">{title}</h3>
      <p className="softwareBlurbRole">{role}</p>
      <p className="softwareBlurbDescription">{description}</p>
      <div className="relative flex content-end justify-between">
        <button type="button" className="border-2 border-orange text-lt-yellow bg-orange p-4 rounded-xl">
          <a target="_blank" rel="noreferrer" href={link}>Learn more</a>
        </button>
        <button className="float-right border-2 border-orange rounded-xl p-4 text-lt-yellow bg-orange" type="button" onClick={toggleSize}>{isEnlarged ? "Hide" : "Expand"}</button>
      </div>
      <img className="mx-auto pt-5" src={path}/>
    </div>
  )
}

export default SoftwareProjectBlurb;