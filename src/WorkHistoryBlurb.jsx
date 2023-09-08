import React, { useState } from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  return (
    <div>
      <h2>{industry}</h2>
      <div>
        {roles.map((role) => {
          return (<WorkHistoryRole
            title={role.title}
            business={role.business}
            bullets={role.bullets}
          />)
        })}
      </div>
      <ul>
        {skills.map((skill) => {
          return (
          <li>{skill}</li>
          )
        })}
      </ul>
      <div>
        <ul>Ask me about:
          {askAbout.map((story) => {
            return (
              <li>{story}</li>
            )
          })}
        </ul>
      </div>
      <div>
        {pictures.map((pic) => {
          return <img src={pic.url}/>
        })}
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;