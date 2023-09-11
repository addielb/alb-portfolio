import React, { useState } from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  return (
    <div className="h-2/6 overflow-y-auto bg-yellow-600 mb-10">
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
      <ul className="pb-2 max-w-lg float-right grid gric-cols-2">
        <span className="font-bold italic">Skills</span>
        {skills.map((skill) => {
          return (
          <li>{skill}</li>
          )
        })}
      </ul>
      <div className="pb-2 max-w-lg float-right pl-2 grid grid-cols-2">
        <ul>Ask me about:
          {askAbout.map((story) => {
            return (
              <li>{story}</li>
            )
          })}
        </ul>
      </div>
      <div className="float-right w-6/12 mx-2 h-96">
        {pictures.map((pic) => {
          return <img src={pic.url}/>
        })}
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;