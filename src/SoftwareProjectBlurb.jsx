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
      <div className="softwareBlurbBtnContainer">
        <button type="button" className="button">
          <a target="_blank" rel="noreferrer" href={link}>Learn more</a>
        </button>
        <button className="button" type="button" onClick={toggleSize}>{isEnlarged ? "Hide" : "Expand"}</button>
      </div>
      <img className="softwareBlurbImg" src={path}/>
    </div>
  )
}

export default SoftwareProjectBlurb;