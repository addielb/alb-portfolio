import React from 'react';

function SoftwareProjectBlurb({ title, role, link, description, gifLink }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{role}</p>
      <p>{description}</p>
      <p>
        <a target="_blank" href={link}>Learn more</a>
      </p>
      <img src={gifLink}/>
    </div>
  )
}

export default SoftwareProjectBlurb;