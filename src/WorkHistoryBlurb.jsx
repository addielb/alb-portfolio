import React, { useState, useEffect } from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  const [displayDescription, setDisplayDescription] = useState(false);

  const toggleDescriptionOn = (e) => {
    e.preventDefault();
    setDisplayDescription(true);
  }

  const toggleDescriptionOff = (e) => {
    e.preventDefault();
    setDisplayDescription(false);
  }

  return (
    <div className="max-h-[80vh] h-2/6 overflow-y-auto bg-yellow-600 mb-10">
      <h2 className="text-2xl font-bold pb-5">{industry}</h2>
      <div className="float-left max-w-xl">
        {roles.map((role) => {
          return (<WorkHistoryRole
            title={role.title}
            business={role.business}
            bullets={role.bullets}
          />)
        })}
      </div>
      <ul className="pb-2 max-w-lg float-left grid gric-cols-2">
        <span className="font-bold italic">Skills</span>
        {skills.map((skill) => {
          return (
          <li>{skill}</li>
          )
        })}
      </ul>
      <div className="pb-2 max-w-lg float-left pl-2 grid grid-cols-2">
        <ul>
          <span className="font-bold italic">Ask me about:</span>
          {askAbout.map((story) => {
            return (
              <li>{story}</li>
            )
          })}
        </ul>
      </div>
      <div className="float-right flex content-start min-h-[60vh] max-h-[60vh] overflow-x-scroll overflow-y-hidden max-w-3xl snap-mandatory snap-x">
        {pictures.map((pic) => {
          return (
              <img
                onMouseEnter={toggleDescriptionOn}
                onMouseLeave={toggleDescriptionOff}
                className="object-cover max-h-[60vh] pr-5 snap-center py-5"
                src={pic.url}
                alt={pic.description}
              />
          )
        })}
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;

// little change again